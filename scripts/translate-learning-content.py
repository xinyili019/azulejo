"""Generate cached learning translations using the project's existing Google endpoint.
Run from the repository root. Existing translations are preserved on restart.
"""
import argparse, concurrent.futures, json, pathlib, re, time, urllib.parse, urllib.request
ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'src/data/translations'
OUT.mkdir(exist_ok=True)
texts = set()
for filename in ['vocabulary.ts', 'situacoes.ts']:
    source = (ROOT / 'src/data' / filename).read_text()
    for match in re.finditer(r'"(?:english|en|exampleEn)":\s*("(?:[^"\\]|\\.)*")', source):
        text = json.loads(match[1])
        if text.strip(): texts.add(text)
instructions = (ROOT / 'src/lib/instructionLanguages.ts').read_text()
a = instructions.index('{', instructions.index('const translations:'))
b = instructions.index('\n};', a) + 2
instruction_keys = list(json.loads(instructions[a:b])['fr'])

def request_translation(items, locale):
    query = urllib.parse.urlencode({'client':'gtx','sl':'en','tl':locale,'dt':'t','q':'\n'.join(items)})
    url = 'https://translate.googleapis.com/translate_a/single?' + query
    error = None
    for attempt in range(5):
        try:
            with urllib.request.urlopen(url, timeout=40) as response: result = json.load(response)
            translated = ''.join(part[0] for part in result[0] if part[0]).strip().split('\n')
            if len(translated) == len(items) and all(x.strip() for x in translated):
                return dict(zip(items, (x.strip() for x in translated)))
            if len(items) > 1:
                middle = len(items)//2
                return request_translation(items[:middle], locale) | request_translation(items[middle:], locale)
            raise ValueError('Empty translation')
        except Exception as exc:
            error = exc
            time.sleep(min(2**attempt, 10))
    raise RuntimeError(f'{locale}: {error}')

def generate(locale):
    path = OUT / f'{locale}.json'
    data = json.loads(path.read_text()) if path.exists() else {}
    required = sorted(texts | (set(instruction_keys) if locale in ['hi','ur','uk','ne','fa','ru','it'] else set()))
    pending = [x for x in required if x not in data]
    batches=[]; batch=[]; length=0
    for text in pending:
        if batch and (length+len(text)>1600 or len(batch)>=25):
            batches.append(batch);batch=[];length=0
        batch.append(text);length+=len(text)+1
    if batch:batches.append(batch)
    print(f'{locale}: {len(required)} strings, {len(batches)} pending batches',flush=True)
    for index, batch in enumerate(batches):
        data.update(request_translation(batch,locale))
        path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
        if index % 20 == 0:print(f'{locale}: {index+1}/{len(batches)} batches',flush=True)
    missing = set(required)-data.keys()
    if missing:raise RuntimeError(f'{locale}: {len(missing)} missing')
    print(f'{locale}: complete ({len(data)} strings)',flush=True)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--locales', nargs='+', choices=['fr','es','bn','ar','hi','ur','uk','ne','fa','ru','it'], default=['fr','es','bn','ar','hi','ur','uk','ne','fa','ru','it'])
    args = parser.parse_args()
    with concurrent.futures.ThreadPoolExecutor(max_workers=min(6, len(args.locales))) as pool:
        list(pool.map(generate, args.locales))
