import html2canvas from "html2canvas-pro";
import { describe, expect, it, vi } from "vitest";
import { captureFlashcard, shouldIgnoreScreenshotElement } from "../src/lib/flashcardScreenshot";

vi.mock("html2canvas-pro", () => ({ default: vi.fn() }));

describe("flashcard screenshot capture", () => {
  it.each([
    { revealed: false, open: false },
    { revealed: true, open: false },
    { revealed: true, open: true }
  ])("copies only the visible card content (revealed=$revealed, translation open=$open)", ({ revealed, open }) => {
    const study = document.createElement("section");
    study.innerHTML = `
      <div class="tile-shell">
        <span class="tile-face tile-front" aria-hidden="${revealed}">front</span>
        <span class="tile-face tile-back" aria-hidden="${!revealed}">
          back <svg aria-hidden="true"></svg>
          <span class="example-body" aria-hidden="${!open}">example translation</span>
        </span>
      </div>
      <button>Previous</button>`;
    const tile = study.querySelector<HTMLElement>(".tile-shell")!;
    const ignore = (element: Element) => shouldIgnoreScreenshotElement(tile, element);

    expect(ignore(study)).toBe(false);
    expect(ignore(tile)).toBe(false);
    expect(ignore(study.querySelector("button")!)).toBe(true);
    expect(ignore(tile.querySelector(".tile-front")!)).toBe(revealed);
    expect(ignore(tile.querySelector(".tile-back")!)).toBe(!revealed);
    expect(ignore(tile.querySelector(".example-body")!)).toBe(!open);
    expect(ignore(tile.querySelector("svg")!)).toBe(false);
  });

  it("replaces the gradient in the clone with four isolated corner motifs", async () => {
    const tile = document.createElement("div");
    vi.spyOn(tile, "getBoundingClientRect").mockReturnValue({ width: 320, height: 320 } as DOMRect);
    const cloneDocument = document.implementation.createHTMLDocument();
    const clone = cloneDocument.createElement("div");
    clone.innerHTML = `<span class="tile-face">
      <html2canvaspseudoelement data-decoration="original"></html2canvaspseudoelement>
      <span class="tile-content">front</span>
      <html2canvaspseudoelement data-decoration="glaze"></html2canvaspseudoelement>
    </span>`;
    cloneDocument.body.append(clone);
    const png = new Blob(["png"], { type: "image/png" });
    const canvas = document.createElement("canvas");
    vi.spyOn(canvas, "toBlob").mockImplementation((callback) => callback(png));
    vi.mocked(html2canvas).mockImplementation(async (element, options) => {
      expect(element).toBe(tile);
      expect(options).toMatchObject({ width: 320, height: 320, foreignObjectRendering: false });
      await options?.onclone?.(cloneDocument, clone);
      return canvas;
    });

    await expect(captureFlashcard(tile)).resolves.toBe(png);
    expect(clone.querySelector('[data-decoration="original"]')).toBeNull();
    expect(clone.querySelector('[data-decoration="glaze"]')).not.toBeNull();
    expect(Array.from(clone.querySelectorAll("svg"), (svg) => svg.dataset.corner)).toEqual([
      "top-left", "top-right", "bottom-right", "bottom-left"
    ]);
    expect(clone.querySelector(".tile-content")?.textContent).toBe("front");
    expect(tile.childElementCount).toBe(0);
  });
});
