import type { ProgressState, SituacaoGroup, VocabularyEntry } from "../types";
import { summarizeByModulo, summarizeProgress } from "../lib/progress";
import type { UiCopy } from "../lib/i18n";

interface ProgressDashboardProps {
  entries: VocabularyEntry[];
  progress: ProgressState;
  ui: UiCopy;
  mode?: "manual" | "situacoes";
  situacaoGroups?: SituacaoGroup[];
  getModuleThemeLabel?: (modulo: string) => string | undefined;
  getSituacaoLabel?: (situacaoId: string, portugueseLabel: string) => string;
  onStartOver: () => void;
}

export function ProgressDashboard({
  entries,
  progress,
  ui,
  mode = "manual",
  situacaoGroups = [],
  getModuleThemeLabel,
  getSituacaoLabel,
  onStartOver
}: ProgressDashboardProps) {
  const total = summarizeProgress(entries, progress);
  const byModulo = summarizeByModulo(entries, progress);
  const readinessLabel =
    mode === "situacoes"
      ? ui.locale === "en"
        ? "ready for your journey!"
        : ui.locale === "zhHans"
          ? "旅程准备度"
          : "旅程準備度"
      : ui.readyForExam;
  const situacaoReadiness = situacaoGroups.flatMap((group) =>
    group.items.map((item) => {
      const groupEntries = entries.filter((entry) => entry.situacoes?.includes(item.id));
      return {
        id: item.id,
        label: getSituacaoLabel?.(item.id, item.label) ?? item.label,
        stats: summarizeProgress(groupEntries, progress)
      };
    })
  );

  return (
    <aside className="dashboard" aria-label={ui.progressDashboard}>
      <div className="stat-main">
        <div className="stat-main-value">
          <span>{total.knownPercent}%</span>
          <span className="exam-readiness">{readinessLabel}</span>
        </div>
        <p>{ui.knownVocabulary}</p>
      </div>
      <div className="stats-row">
        <div>
          <strong>{total.reviewed}</strong>
          <span>{ui.reviewed}</span>
        </div>
        <div>
          <strong>{total.remaining}</strong>
          <span>{ui.remaining}</span>
        </div>
      </div>
      {mode === "situacoes" ? (
        <div className="situacao-readiness">
          {situacaoReadiness.map(({ id, label, stats }) => (
            <div className="module-row situacao-readiness-row" key={id}>
              <span>{label}</span>
              <progress value={stats.known} max={stats.total || 1} aria-label={`${label} readiness`} />
              <strong>{stats.known}/{stats.total}</strong>
            </div>
          ))}
        </div>
      ) : (
        <div className="module-progress">
          {Object.entries(byModulo).map(([modulo, stats]) => (
            <div className="module-row" key={modulo}>
              <span>{formatProgressModuleLabel(ui.moduloLabel(modulo), getModuleThemeLabel?.(modulo))}</span>
              <progress value={stats.known} max={stats.total} aria-label={ui.moduleProgress(modulo)} />
              <strong>{stats.known}/{stats.total}</strong>
            </div>
          ))}
        </div>
      )}
      <button className="progress-start-over" type="button" onClick={onStartOver}>
        {ui.startOver}
      </button>
    </aside>
  );
}

function formatProgressModuleLabel(moduleLabel: string, themeLabel?: string) {
  const moduleNumber = moduleLabel.match(/\d+/u)?.[0] ?? moduleLabel;
  return themeLabel ? `${moduleNumber} · ${themeLabel}` : moduleNumber;
}
