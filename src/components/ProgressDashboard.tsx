import type { ProgressState, VocabularyEntry } from "../types";
import { summarizeByModulo, summarizeProgress } from "../lib/progress";
import type { UiCopy } from "../lib/i18n";

interface ProgressDashboardProps {
  entries: VocabularyEntry[];
  progress: ProgressState;
  ui: UiCopy;
}

export function ProgressDashboard({ entries, progress, ui }: ProgressDashboardProps) {
  const total = summarizeProgress(entries, progress);
  const byModulo = summarizeByModulo(entries, progress);

  return (
    <aside className="dashboard" aria-label={ui.progressDashboard}>
      <div className="stat-main">
        <span>{total.knownPercent}%</span>
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
      <div className="module-progress">
        {Object.entries(byModulo).map(([modulo, stats]) => (
          <div className="module-row" key={modulo}>
            <span>{ui.moduloLabel(modulo)}</span>
            <progress value={stats.known} max={stats.total} aria-label={ui.moduleProgress(modulo)} />
            <strong>{stats.known}/{stats.total}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}
