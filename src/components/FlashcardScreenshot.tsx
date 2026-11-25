import { Camera, Download, Share, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type RefObject } from "react";
import type { UiCopy } from "../lib/i18n";
import "./FlashcardScreenshot.css";

const PNG_NAME = "azulejo-flashcard.png";

function getShareData(png: Blob): ShareData | undefined {
  if (typeof navigator.share !== "function" || typeof navigator.canShare !== "function") return;
  try {
    const data = { files: [new File([png], PNG_NAME, { type: "image/png", lastModified: 0 })] };
    return navigator.canShare(data) ? data : undefined;
  } catch {
    return undefined;
  }
}

interface Props {
  tileRef: RefObject<HTMLDivElement | null>;
  ui: UiCopy;
}

export function FlashcardScreenshot({ tileRef, ui }: Props) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const captureRef = useRef<AbortController | null>(null);
  const objectUrl = useRef<string | null>(null);
  const [preview, setPreview] = useState<{ url: string; share?: ShareData }>();
  const [error, setError] = useState<"capture" | "share">();
  const [sharing, setSharing] = useState(false);
  const copy = ui.flashcardScreenshot;

  useEffect(() => releaseCapture, []);

  function releaseCapture() {
    captureRef.current?.abort();
    captureRef.current = null;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = null;
  }

  function handleClose() {
    releaseCapture();
    setPreview(undefined);
    setError(undefined);
    setSharing(false);
    triggerRef.current?.focus();
  }

  async function openPreview() {
    const tile = tileRef.current;
    const dialog = dialogRef.current;
    if (!tile || !dialog || dialog.open || captureRef.current) return;

    const request = new AbortController();
    captureRef.current = request;
    try {
      dialog.showModal();
      const { captureFlashcard } = await import("../lib/flashcardScreenshot");
      if (request.signal.aborted) return;
      const png = await captureFlashcard(tile, request.signal);
      if (request.signal.aborted) return;
      const url = URL.createObjectURL(png);
      objectUrl.current = url;
      setPreview({ url, share: getShareData(png) });
    } catch {
      if (!request.signal.aborted) setError("capture");
    }
  }

  async function shareImage() {
    const request = captureRef.current;
    if (!preview?.share || sharing || !request) return;
    try {
      // The PNG is already prepared; call share directly from this click.
      const result = navigator.share(preview.share);
      setSharing(true);
      setError(undefined);
      await result;
    } catch (reason) {
      if (!request.signal.aborted && !(reason instanceof DOMException && reason.name === "AbortError")) {
        setError("share");
      }
    } finally {
      if (!request.signal.aborted) setSharing(false);
    }
  }

  return (
    <>
      <button
        className="flashcard-screenshot-trigger"
        data-testid="flashcard-screenshot"
        ref={triggerRef}
        type="button"
        aria-label={copy.title}
        title={copy.title}
        onClick={openPreview}
      >
        <Camera size={18} aria-hidden="true" />
      </button>
      <dialog
        className="flashcard-screenshot-dialog"
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={handleClose}
      >
        <header className="flashcard-screenshot-heading">
          <h2 id={titleId}>{copy.title}</h2>
          <button className="flashcard-screenshot-close" type="button" aria-label={copy.close}
            title={copy.close} onClick={() => dialogRef.current?.close()}>
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        {preview ? (
          <>
            <img className="flashcard-screenshot-image" src={preview.url} alt={copy.preview} />
            <div className="flashcard-screenshot-actions">
              <a href={preview.url} download={PNG_NAME}>
                <Download size={17} aria-hidden="true" />{copy.download}
              </a>
              {preview.share && (
                <button type="button" disabled={sharing} onClick={shareImage}>
                  <Share size={17} aria-hidden="true" />{copy.share}
                </button>
              )}
            </div>
          </>
        ) : !error && <p role="status">{copy.preparing}</p>}
        {error && <p role="alert">{error === "capture" ? copy.captureError : copy.shareError}</p>}
      </dialog>
    </>
  );
}
