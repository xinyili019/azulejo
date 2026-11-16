#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Generate and validate every current recording before publishing the new playback behavior.
AZULEJO_TTS_VOICE='Joana (Enhanced)' npm run generate:audio -- --force
npm test
npm run validate:data
npm run validate:situacoes
npm run build

git add -- README.md scripts/generate-audio.mjs scripts/release-joana-enhanced.sh \
  src/App.tsx src/data/situacoes.ts src/lib/portugueseAudio.ts src/types.ts \
  tests/app.test.tsx public/audio/pt
if ! git diff --cached --quiet; then
  git commit -m 'Use Joana Enhanced recordings throughout Portuguese practice'
fi
git push origin HEAD:main

release_commit=$(git rev-parse HEAD)
for attempt in {1..24}; do
  run_id=$(gh run list --workflow deploy.yml --commit "$release_commit" \
    --json databaseId --jq '.[0].databaseId // empty')
  if [ -n "$run_id" ]; then
    gh run watch "$run_id" --exit-status
    exit 0
  fi
  sleep 5
done

echo 'The commit was pushed, but its deployment workflow has not appeared yet.' >&2
exit 1
