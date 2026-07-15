import { Check, ChevronDown, RotateCcw, Search, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { situacaoLabels } from "../data/situacoes";
import type { CardStatus, Direction, ProgressState, VocabularyEntry } from "../types";
import { getExampleAudioPath, getWordAudioPath } from "../lib/audioPaths";
import type { UiCopy } from "../lib/i18n";
import { playPortugueseAudio } from "../lib/portugueseAudio";
import { getPortugueseBareText, getPortugueseTermParts } from "../lib/portugueseDisplay";
import { getCardProgress } from "../lib/progress";

interface GlobalSearchViewProps {
  entries: VocabularyEntry[];
  progress: ProgressState;
  direction: Direction;
  ui: UiCopy;
  onBack: () => void;
  onSetStatus: (entry: VocabularyEntry, status: Exclude<CardStatus, "new">) => void;
}

const MAX_RELATED_RESULTS = 20;
const SEARCH_PAGE_SIZE = 60;

export function GlobalSearchView({ entries, progress, direction, ui, onBack, onSetStatus }: GlobalSearchViewProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleLimit, setVisibleLimit] = useState(SEARCH_PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedQuery(query), 150);
    return () => window.clearTimeout(timeoutId);
  }, [query]);

  const results = useMemo(() => searchEntries(entries, debouncedQuery), [entries, debouncedQuery]);
  const visibleResults = results.slice(0, visibleLimit);
  const copy = getGlobalSearchCopy(ui.locale);

  useEffect(() => {
    setVisibleLimit(SEARCH_PAGE_SIZE);
  }, [debouncedQuery]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || visibleLimit >= results.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setVisibleLimit((current) => current + SEARCH_PAGE_SIZE);
    }, { rootMargin: "240px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, [results.length, visibleLimit]);

  function playEntryAudio(entry: VocabularyEntry) {
    const path = entry.examplePt ? getExampleAudioPath(entry) : getWordAudioPath(entry);
    playPortugueseAudio(path, entry.examplePt ?? getPortugueseBareText(entry));
  }

  return (
    <section className="global-search-panel" aria-label={copy.title}>
      <div className="global-search-toolbar">
        <button className="secondary global-search-back" type="button" onClick={onBack}>
          {ui.goBack}
        </button>
        <label className="global-search-field">
          <span>{copy.searchLabel}</span>
          <span className="global-search-input-shell">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.placeholder}
            />
          </span>
        </label>
        <span className="global-search-count" aria-live="polite">
          {copy.count(results.length)}
        </span>
      </div>

      <div className="global-search-list" role="list">
        {entries.length === 0 && (
          <div className="global-search-empty" role="status">
            {copy.noWords}
          </div>
        )}

        {entries.length > 0 && results.length === 0 && (
          <div className="global-search-empty" role="status">
            {copy.noResults}
          </div>
        )}

        {visibleResults.map((entry) => {
          const status = getCardProgress(progress, entry.id).status;
          const isExpanded = expandedId === entry.id;

          return (
            <article className={`global-search-row${isExpanded ? " is-expanded" : ""}`} key={entry.id} role="listitem">
              <button
                className="global-search-row-summary"
                type="button"
                aria-expanded={isExpanded}
                onClick={() => setExpandedId((current) => (current === entry.id ? null : entry.id))}
              >
                <span className="global-search-word">{renderPortugueseTerm(entry)}</span>
                <span className="global-search-meaning">{getEntryTranslation(entry, direction)}</span>
                <span className="global-search-badges">{renderLocationBadges(entry)}</span>
                <span className={`global-search-status is-${status}`}>{copy.status[status]}</span>
                <ChevronDown className="global-search-chevron" size={18} aria-hidden="true" />
              </button>

              {isExpanded && (
                <div className="global-search-row-detail">
                  <div className="global-search-example">
                    <p className="global-search-example-pt">{entry.examplePt ?? entry.portuguese}</p>
                    {getExampleTranslation(entry, direction) && (
                      <p className="global-search-example-translation">{getExampleTranslation(entry, direction)}</p>
                    )}
                  </div>
                  <div className="global-search-row-actions">
                    <button className="secondary" type="button" onClick={() => playEntryAudio(entry)}>
                      <Volume2 size={17} aria-hidden="true" />
                      {ui.listen}
                    </button>
                    <button
                      className={`secondary review-again${status === "again" ? " is-active" : ""}`}
                      type="button"
                      aria-pressed={status === "again"}
                      onClick={() => onSetStatus(entry, "again")}
                    >
                      <RotateCcw size={17} aria-hidden="true" />
                      {ui.again}
                    </button>
                    <button
                      className={`primary review-known${status === "known" ? " is-active" : ""}`}
                      type="button"
                      aria-pressed={status === "known"}
                      onClick={() => onSetStatus(entry, "known")}
                    >
                      <Check size={17} aria-hidden="true" />
                      {ui.known}
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {visibleLimit < results.length && (
          <div className="global-search-more" ref={loadMoreRef}>
            <button className="secondary" type="button" onClick={() => setVisibleLimit((current) => current + SEARCH_PAGE_SIZE)}>
              {copy.showMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export function searchEntries(entries: VocabularyEntry[], query: string) {
  const needle = normalizeSearchText(query);
  if (!needle) return entries;

  const directResults = entries
    .map((entry, index) => ({ entry, index, rank: getSearchRank(entry, needle) }))
    .filter((result) => result.rank < 100)
    .sort((a, b) => a.rank - b.rank || a.index - b.index);

  if (directResults.length === 0) return [];

  const directIds = new Set(directResults.map(({ entry }) => entry.id));
  const relatedSituacoes = new Set(directResults.flatMap(({ entry }) => entry.situacoes ?? []));
  const relatedResults = entries
    .map((entry, index) => ({ entry, index, rank: getRelatedRank(entry, relatedSituacoes) }))
    .filter(({ entry, rank }) => !directIds.has(entry.id) && rank < 100)
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
    .slice(0, MAX_RELATED_RESULTS);

  return [...directResults, ...relatedResults].map(({ entry }) => entry);
}

function getRelatedRank(entry: VocabularyEntry, situacoes: Set<string>) {
  if (entry.situacoes?.some((situacao) => situacoes.has(situacao))) return 3;
  return 100;
}

function getSearchRank(entry: VocabularyEntry, needle: string) {
  const portuguese = normalizeSearchText(entry.portuguese);
  const barePortuguese = normalizeSearchText(getPortugueseBareText(entry));
  if (portuguese.startsWith(needle) || barePortuguese.startsWith(needle)) return 0;
  if (portuguese.includes(needle) || barePortuguese.includes(needle)) return 1;

  const fields = [entry.english, entry.zhHans, entry.zhHant, entry.examplePt, entry.exampleEn, entry.exampleZhHans, entry.exampleZhHant];
  return fields.some((value) => normalizeSearchText(value ?? "").includes(needle)) ? 2 : 100;
}

function normalizeSearchText(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("pt-PT")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/gu, " ");
}

function renderPortugueseTerm(entry: VocabularyEntry) {
  const parts = getPortugueseTermParts(entry);
  if (!parts.article) return parts.word;

  return (
    <>
      <span className="pt-article">{parts.article}</span>{" "}
      <span className="pt-headword">{parts.word}</span>
    </>
  );
}

function renderLocationBadges(entry: VocabularyEntry) {
  const badges = [
    entry.modulo ? formatModuloBadge(entry.modulo) : null,
    ...(entry.situacoes ?? []).map((situacao) => situacaoLabels[situacao] ?? situacao)
  ].filter(Boolean);

  return badges.length > 0 ? badges.map((badge) => <span key={badge}>{badge}</span>) : <span>Word bank</span>;
}

function formatModuloBadge(modulo: string) {
  const number = modulo.match(/\d+/)?.[0];
  return number ? `M${number}` : modulo;
}

function getEntryTranslation(entry: VocabularyEntry, direction: Direction) {
  if (direction.includes("zh-hans")) return entry.zhHans;
  if (direction.includes("zh-hant")) return entry.zhHant;
  return entry.english;
}

function getExampleTranslation(entry: VocabularyEntry, direction: Direction) {
  if (direction.includes("zh-hans")) return entry.exampleZhHans;
  if (direction.includes("zh-hant")) return entry.exampleZhHant;
  return entry.exampleEn;
}

function getGlobalSearchCopy(locale: UiCopy["locale"]) {
  if (locale === "zhHans") {
    return {
      title: "全局搜索",
      searchLabel: "搜索词库",
      placeholder: "葡语、英语或中文",
      noWords: "词库里还没有词。",
      noResults: "没有找到匹配的词。换个关键词试试。",
      count: (count: number) => `${count} 个词`,
      showMore: "显示更多",
      status: { new: "未学", again: "复习中", known: "已掌握" }
    };
  }

  if (locale === "zhHant") {
    return {
      title: "全局搜尋",
      searchLabel: "搜尋詞庫",
      placeholder: "葡語、英語或中文",
      noWords: "詞庫裡還沒有單字。",
      noResults: "沒有找到符合的單字。換個關鍵詞試試。",
      count: (count: number) => `${count} 個單字`,
      showMore: "顯示更多",
      status: { new: "未學", again: "複習中", known: "已掌握" }
    };
  }

  return {
    title: "Search vocabulary",
    searchLabel: "Search vocabulary",
    placeholder: "Portuguese, English, or Chinese",
    noWords: "No words in the bank yet.",
    noResults: "No matching words. Try another spelling.",
    count: (count: number) => `${count} ${count === 1 ? "word" : "words"}`,
    showMore: "Show more",
    status: { new: "unseen", again: "in review", known: "learned" }
  };
}
