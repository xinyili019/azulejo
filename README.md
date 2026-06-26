# European Portuguese A2 Vocabulary Trainer

Browser-based vocabulary practice app for beginner European Portuguese, organized by `modulo`.

## Run

```bash
npm install
npm run dev
```

## Test

```bash
npm test
npm run validate:data
npm run build
npm run e2e
```

## PDF extraction

The current workspace contains an iCloud placeholder named `.Caderno de Formação_A2.pdf.icloud`, not the real PDF. Download the full PDF into this directory first, then run:

```bash
npm run extract:vocab -- "Caderno de Formação_A2.pdf" extracted-vocabulary-draft.json
```

Review the extracted Portuguese terms, add English translations, and then replace `src/data/vocabulary.ts` with reviewed entries marked as `source: "pdf"`.

The seed entries currently in the app are only for development and testing.
