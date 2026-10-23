# Offline learning translations

The JSON dictionaries map the existing English learning text to each target language.
They cover vocabulary meanings, examples, dialogues, and quick-reference phrases.
For Hindi, Urdu, Ukrainian, Nepali, Persian, Russian, and Italian, they also contain
instruction text from `src/lib/instructionLanguages.ts`.

The initial translations are machine-generated through the same Google endpoint
used by `scripts/add-chinese-translations.mjs`. They have been spot-checked, not
fully reviewed by native speakers. Context corrections and reviewed interface
wording belong in `overrides.json`; these take precedence at runtime and survive
regeneration. In particular, `floor` means a building level and `to miss` means
feeling someone's or something's absence in this dataset.

To generate missing strings for selected languages from the repository root:

```sh
python3 scripts/translate-learning-content.py --locales uk ne fa ru it
```

The script resumes from existing dictionaries and requires network access.
Studying uses only the bundled dictionaries and works offline.
Language codes: `uk` Ukrainian, `ne` Nepali, `fa` Persian, `ru` Russian, `it` Italian.
