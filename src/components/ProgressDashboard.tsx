import type { ProgressState, VocabularyEntry } from "../types";
import { summarizeByModulo, summarizeProgress } from "../lib/progress";

interface ProgressDashboardProps {
  entries: VocabularyEntry[];
  progress: ProgressState;
}

export function ProgressDashboard({ entries, progress }: ProgressDashboardProps) {
  const total = summarizeProgress(entries, progress);
  const byModulo = summarizeByModulo(entries, progress);

  return (
    <aside className="dashboard" aria-label="Progress dashboard">
      <div className="stat-main">
        <span>{total.knownPercent}%</span>
        <p>known vocabulary</p>
      </div>
      <div className="stats-row">
        <div>
          <strong>{total.reviewed}</strong>
          <span>reviewed</span>
        </div>
        <div>
          <strong>{total.remaining}</strong>
          <span>remaining</span>
        </div>
      </div>
      <div className="module-progress">
        {Object.entries(byModulo).map(([modulo, stats]) => (
          <div className="module-row" key={modulo}>
            <span>{modulo}</span>
            <progress value={stats.known} max={stats.total} aria-label={`${modulo} progress`} />
            <strong>{stats.known}/{stats.total}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}
