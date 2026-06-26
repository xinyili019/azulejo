import { Download, Upload } from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Flashcard } from "./components/Flashcard";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { vocabulary } from "./data/vocabulary";
import { filterEntries, getModulos } from "./lib/filtering";
import { loadProgress, recordReview, saveProgress } from "./lib/progress";
import type { Direction, ProgressState } from "./types";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());
  const [modulo, setModulo] = useState("all");
  const [onlyDue, setOnlyDue] = useState(false);
  const [direction, setDirection] = useState<Direction>("pt-en");
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const modulos = useMemo(() => getModulos(vocabulary), []);
  const filteredEntries = useMemo(
    () => filterEntries(vocabulary, progress, { modulo, onlyDue }),
    [modulo, onlyDue, progress]
  );
  const activeEntry = filteredEntries[cardIndex % Math.max(filteredEntries.length, 1)];

  useEffect(() => {
    setCardIndex(0);
    setRevealed(false);
  }, [modulo, onlyDue, direction]);

  function moveNext() {
    setRevealed(false);
    setCardIndex((current) => (filteredEntries.length === 0 ? 0 : (current + 1) % filteredEntries.length));
  }

  function handleReview(status: "again" | "known") {
    if (!activeEntry) return;
    setProgress((current) => recordReview(current, activeEntry.id, status));
    moveNext();
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "pt-a2-vocab-progress.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function importProgress(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const nextProgress = JSON.parse(String(reader.result)) as ProgressState;
        setProgress(nextProgress);
      } catch {
        window.alert("Could not import that progress file.");
      }
    };
    reader.readAsText(file);
  }

  return (
    <main className="app-shell">
      <section className="workspace">
        <header className="app-header">
          <div>
            <p className="eyebrow">European Portuguese A1 + A2</p>
            <h1>Azulejo - build your Portuguese vocabulary</h1>
          </div>
          <div className="header-actions">
            <button className="icon-button" type="button" onClick={exportProgress} aria-label="Export progress">
              <Download size={18} aria-hidden="true" />
            </button>
            <label className="icon-button" aria-label="Import progress">
              <Upload size={18} aria-hidden="true" />
              <input type="file" accept="application/json" onChange={importProgress} />
            </label>
          </div>
        </header>

        <section className="controls" aria-label="Study controls">
          <label>
            Module
            <select value={modulo} onChange={(event) => setModulo(event.target.value)}>
              <option value="all">All modules</option>
              {modulos.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mode
            <select value={direction} onChange={(event) => setDirection(event.target.value as Direction)}>
              <option value="pt-en">Portuguese to English</option>
              <option value="en-pt">English to Portuguese</option>
              <option value="pt-zh-hans">葡萄牙语 → 简体中文</option>
              <option value="zh-hans-pt">简体中文 → 葡萄牙语</option>
              <option value="pt-zh-hant">葡萄牙語 → 繁體中文</option>
              <option value="zh-hant-pt">繁體中文 → 葡萄牙語</option>
            </select>
          </label>
          <label className="toggle">
            <input type="checkbox" checked={onlyDue} onChange={(event) => setOnlyDue(event.target.checked)} />
            Review only unknown
          </label>
        </section>

        {activeEntry ? (
          <Flashcard
            entry={activeEntry}
            direction={direction}
            revealed={revealed}
            onToggleReveal={() => setRevealed((current) => !current)}
            onAgain={() => handleReview("again")}
            onKnown={() => handleReview("known")}
          />
        ) : (
          <section className="empty-state">
            <h2>No cards match these filters</h2>
            <p>Include known cards or choose another module to continue reviewing.</p>
          </section>
        )}
      </section>

      <ProgressDashboard entries={vocabulary} progress={progress} />
    </main>
  );
}
