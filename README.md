# Azulejo — European Portuguese A1 + A2 Trainer

Browser-based vocabulary practice app for beginner European Portuguese, organized by `Módulo` and by everyday `Situações` (bank, doctor, renting, bureaucracy…), with flashcards, retrieval review, module quizzes and native pronunciation audio.

The app uses the reviewed extracted vocabulary in `src/data/vocabulary.ts` and the situational content in `src/data/situacoes.ts`. The original workbook PDF is not required to run, test, or deploy the app.

## Run

```bash
npm install
npm run dev
```

## Test

```bash
npm test
npm run validate:data
npm run validate:situacoes
npm run build
npm run e2e
```

## Vocabulary data

Curated source fragments live in `src/data/fragments/`. To regenerate the app dataset after editing those fragments, run:

```bash
npm run merge:vocab
npm run validate:data
```

PDF files and raw extraction drafts are intentionally ignored because the reviewed vocabulary has already been extracted into the repository.

## Translations

Learning-text translations for the supported instruction languages live in `src/data/translations/`. See [its README](src/data/translations/README.md) for how they are generated and overridden.

## Audio

Pronunciation audio is stored in `public/audio/pt/`. To generate missing files (macOS only, uses `say`):

```bash
npm run generate:audio
```

Set `AZULEJO_TTS_VOICE` to choose the voice (default `Joana`). Pass `--force` to regenerate existing files or `--only=id1,id2` to limit which entries are generated.

## iOS

`ios/AzulejoIOS/` contains an early-stage SwiftUI app project.
