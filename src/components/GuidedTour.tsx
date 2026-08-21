import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

interface GuidedTourProps {
  targetSelector: string;
  copy: string;
  step: number;
  totalSteps: number;
  labels: {
    dialog: string;
    continue: string;
    skip: string;
    gotIt: string;
  };
  onAdvance: () => void;
  onSkip: () => void;
}

interface TargetBounds {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

const TARGET_PADDING_PX = 4;
const VIEWPORT_MARGIN_PX = 12;
const POPUP_GAP_PX = 10;

export function GuidedTour({ targetSelector, copy, step, totalSteps, labels, onAdvance, onSkip }: GuidedTourProps) {
  const [targetBounds, setTargetBounds] = useState<TargetBounds | null>(null);
  const [popupPosition, setPopupPosition] = useState<CSSProperties>({ visibility: "hidden" });
  const popupRef = useRef<HTMLDivElement | null>(null);
  const gotItRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(targetSelector));
    if (targets.length === 0) {
      setTargetBounds(null);
      return;
    }
    targets.forEach((target) => target.classList.add("tour-spotlight-target"));

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const initialRect = getCombinedBounds(targets);
    const isFullyVisible = initialRect.top >= 0 && initialRect.bottom <= window.innerHeight;
    if (!isFullyVisible) targets[0].scrollIntoView({ block: "center", inline: "nearest", behavior: reducedMotion ? "auto" : "smooth" });

    const updateBounds = () => {
      const rect = getCombinedBounds(targets);
      setTargetBounds({
        top: Math.max(0, rect.top - TARGET_PADDING_PX),
        right: Math.min(window.innerWidth, rect.right + TARGET_PADDING_PX),
        bottom: Math.min(window.innerHeight, rect.bottom + TARGET_PADDING_PX),
        left: Math.max(0, rect.left - TARGET_PADDING_PX),
        width: rect.width + TARGET_PADDING_PX * 2,
        height: rect.height + TARGET_PADDING_PX * 2
      });
    };

    updateBounds();
    const settleTimer = window.setTimeout(updateBounds, reducedMotion ? 0 : 350);
    window.addEventListener("resize", updateBounds);
    window.addEventListener("scroll", updateBounds, true);
    return () => {
      targets.forEach((target) => target.classList.remove("tour-spotlight-target"));
      window.clearTimeout(settleTimer);
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds, true);
    };
  }, [targetSelector, step]);

  useLayoutEffect(() => {
    if (!targetBounds || !popupRef.current) return;
    const popupRect = popupRef.current.getBoundingClientRect();
    const preferredLeft = targetBounds.left + targetBounds.width / 2 - popupRect.width / 2;
    const left = Math.min(
      window.innerWidth - popupRect.width - VIEWPORT_MARGIN_PX,
      Math.max(VIEWPORT_MARGIN_PX, preferredLeft)
    );
    const roomBelow = window.innerHeight - targetBounds.bottom;
    const top =
      roomBelow >= popupRect.height + POPUP_GAP_PX + VIEWPORT_MARGIN_PX
        ? targetBounds.bottom + POPUP_GAP_PX
        : Math.max(VIEWPORT_MARGIN_PX, targetBounds.top - popupRect.height - POPUP_GAP_PX);

    setPopupPosition({ top, left, visibility: "visible" });
    gotItRef.current?.focus({ preventScroll: true });
  }, [copy, targetBounds]);

  if (!targetBounds) return null;

  const scrimStyle = (style: CSSProperties): CSSProperties => ({ position: "fixed", ...style });

  return (
    <div className="guided-tour" aria-live="polite">
      <button
        className="tour-scrim tour-scrim-top"
        style={scrimStyle({ top: 0, left: 0, right: 0, height: targetBounds.top })}
        type="button"
        aria-label={labels.continue}
        onClick={onAdvance}
      />
      <button
        className="tour-scrim tour-scrim-bottom"
        style={scrimStyle({ top: targetBounds.bottom, left: 0, right: 0, bottom: 0 })}
        type="button"
        aria-label={labels.continue}
        onClick={onAdvance}
      />
      <button
        className="tour-scrim tour-scrim-left"
        style={scrimStyle({ top: targetBounds.top, left: 0, width: targetBounds.left, height: targetBounds.height })}
        type="button"
        aria-label={labels.continue}
        onClick={onAdvance}
      />
      <button
        className="tour-scrim tour-scrim-right"
        style={scrimStyle({
          top: targetBounds.top,
          left: targetBounds.right,
          right: 0,
          height: targetBounds.height
        })}
        type="button"
        aria-label={labels.continue}
        onClick={onAdvance}
      />
      <span
        className="tour-target-blocker"
        style={{
          position: "fixed",
          top: targetBounds.top,
          left: targetBounds.left,
          width: targetBounds.width,
          height: targetBounds.height
        }}
        aria-hidden="true"
      />
      <div className="tour-popup" ref={popupRef} role="dialog" aria-label={labels.dialog} aria-modal="true" style={popupPosition}>
        <p>{copy}</p>
        <div className="tour-popup-actions">
          <span className="tour-step-counter">{step + 1} / {totalSteps}</span>
          <button className="tour-skip" type="button" onClick={onSkip}>
            {labels.skip}
          </button>
          <button className="tour-got-it" ref={gotItRef} type="button" onClick={onAdvance}>
            {labels.gotIt}
          </button>
        </div>
      </div>
    </div>
  );
}

function getCombinedBounds(targets: HTMLElement[]) {
  const rects = targets.map((target) => target.getBoundingClientRect());
  const top = Math.min(...rects.map((rect) => rect.top));
  const right = Math.max(...rects.map((rect) => rect.right));
  const bottom = Math.max(...rects.map((rect) => rect.bottom));
  const left = Math.min(...rects.map((rect) => rect.left));

  return { top, right, bottom, left, width: right - left, height: bottom - top };
}
