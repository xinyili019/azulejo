import { useCallback, useLayoutEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

type SituacaoTab = "vocabulario" | "dialogo" | "cartao";

interface SituacaoTabsProps {
  activeTab: SituacaoTab;
  locale: "en" | "zhHans" | "zhHant";
  onChange: (tab: SituacaoTab) => void;
}

const TAB_LABELS: Record<SituacaoTabsProps["locale"], Record<SituacaoTab, string>> = {
  en: { vocabulario: "Vocabulary", dialogo: "Dialogue", cartao: "Cheat sheet" },
  zhHans: { vocabulario: "词汇", dialogo: "对话", cartao: "速查卡" },
  zhHant: { vocabulario: "單字", dialogo: "對話", cartao: "速查卡" }
};

const TABLIST_LABELS: Record<SituacaoTabsProps["locale"], string> = {
  en: "Situation content",
  zhHans: "场景内容",
  zhHant: "場景內容"
};

const TAB_IDS: SituacaoTab[] = ["vocabulario", "dialogo", "cartao"];

export function SituacaoTabs({ activeTab, locale, onChange }: SituacaoTabsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef(new Map<SituacaoTab, HTMLButtonElement>());
  const [thumb, setThumb] = useState({ x: 0, width: 0 });
  const [pressed, setPressed] = useState(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const activeButton = buttonRefs.current.get(activeTab);
    if (!track || !activeButton) return;

    const trackRect = track.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    setThumb({ x: buttonRect.left - trackRect.left, width: buttonRect.width });
  }, [activeTab]);

  useLayoutEffect(() => {
    measure();

    const track = trackRef.current;
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    if (track && observer) observer.observe(track);
    buttonRefs.current.forEach((button) => observer?.observe(button));
    window.addEventListener("resize", measure);

    const fontsReady = document.fonts?.ready;
    fontsReady?.then(measure).catch(() => undefined);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, locale]);

  function releasePress(event?: PointerEvent<HTMLButtonElement>) {
    if (event?.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setPressed(false);
  }

  const style = {
    "--situacao-thumb-x": `${thumb.x}px`,
    "--situacao-thumb-width": `${thumb.width}px`
  } as CSSProperties;

  return (
    <div
      ref={trackRef}
      className={`situacao-tabs${pressed ? " is-pressing" : ""}${thumb.width > 0 ? " is-measured" : ""}`}
      role="tablist"
      aria-label={TABLIST_LABELS[locale]}
      style={style}
    >
      <span className="situacao-tabs-thumb" aria-hidden="true" />
      {TAB_IDS.map((tabId) => (
        <button
          key={tabId}
          ref={(node) => {
            if (node) buttonRefs.current.set(tabId, node);
            else buttonRefs.current.delete(tabId);
          }}
          type="button"
          role="tab"
          aria-selected={activeTab === tabId}
          className={activeTab === tabId ? "is-active" : ""}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setPressed(true);
          }}
          onPointerUp={releasePress}
          onPointerCancel={releasePress}
          onClick={() => onChange(tabId)}
        >
          {TAB_LABELS[locale][tabId]}
        </button>
      ))}
    </div>
  );
}
