import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FlashcardScreenshot } from "../src/components/FlashcardScreenshot";
import { captureFlashcard } from "../src/lib/flashcardScreenshot";
import { getUiCopy } from "../src/lib/i18n";

vi.mock("../src/lib/flashcardScreenshot", () => ({ captureFlashcard: vi.fn() }));

const png = new Blob(["png"], { type: "image/png" });

function setup(canShareFile: boolean) {
  const share = vi.fn().mockResolvedValue(undefined);
  const canShare = vi.fn().mockReturnValue(canShareFile);
  vi.stubGlobal("navigator", { share, canShare });
  vi.stubGlobal("URL", class extends URL {
    static createObjectURL = vi.fn().mockReturnValue("blob:test-preview");
    static revokeObjectURL = vi.fn();
  });
  const oldShowModal = Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, "showModal");
  Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
    configurable: true,
    value(this: HTMLDialogElement) { this.open = true; }
  });
  const restoreDialog = () => {
    if (oldShowModal) Object.defineProperty(HTMLDialogElement.prototype, "showModal", oldShowModal);
    else Reflect.deleteProperty(HTMLDialogElement.prototype, "showModal");
  };

  vi.mocked(captureFlashcard).mockResolvedValue(png);
  function Fixture() {
    const tileRef = useRef<HTMLDivElement>(null);
    return <>
      <div ref={tileRef} className="tile-shell">Visible word</div>
      <FlashcardScreenshot tileRef={tileRef} ui={getUiCopy("pt-en")} />
    </>;
  }
  render(<Fixture />);
  fireEvent.click(screen.getByTestId("flashcard-screenshot"));
  return { share, canShare, restoreDialog };
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

describe("flashcard export actions", () => {
  it("only calls native share during the separate Share click, with just the PNG file", async () => {
    const { share, canShare, restoreDialog } = setup(true);
    try {
      const shareButton = await screen.findByRole("button", { name: "Share image" });
      expect(share).not.toHaveBeenCalled();
      await act(async () => {
        fireEvent.click(shareButton);
        expect(share).toHaveBeenCalledTimes(1);
      });
      const payload = share.mock.calls[0][0] as ShareData;
      expect(payload).toBe(canShare.mock.calls[0][0]);
      expect(Object.keys(payload)).toEqual(["files"]);
      expect(payload.files).toHaveLength(1);
      expect(payload.files![0]).toMatchObject({ name: "azulejo-flashcard.png", type: "image/png", lastModified: 0 });
      expect(screen.getByRole("link", { name: "Download PNG" })).toHaveAttribute("download", "azulejo-flashcard.png");
    } finally {
      restoreDialog();
    }
  });

  it("keeps the PNG download available when file sharing is unsupported", async () => {
    const { share, restoreDialog } = setup(false);
    try {
      const download = await screen.findByRole("link", { name: "Download PNG" });
      expect(download).toHaveAttribute("href", "blob:test-preview");
      expect(screen.queryByRole("button", { name: "Share image" })).not.toBeInTheDocument();
      expect(share).not.toHaveBeenCalled();
    } finally {
      restoreDialog();
    }
  });
});
