import html2canvas from "html2canvas-pro";
import cormorant400 from "../assets/fonts/cormorant-400.ttf?inline";
import cormorant500 from "../assets/fonts/cormorant-500.ttf?inline";
import hanken500 from "../assets/fonts/hanken-grotesk-500.ttf?inline";
import hanken600 from "../assets/fonts/hanken-grotesk-600.ttf?inline";
import hanken700 from "../assets/fonts/hanken-grotesk-700.ttf?inline";

const fonts = [
  ["Cormorant", 400, cormorant400],
  ["Cormorant", 500, cormorant500],
  ["Hanken Grotesque", 500, hanken500],
  ["Hanken Grotesque", 600, hanken600],
  ["Hanken Grotesque", 700, hanken700]
].map(([family, weight, url]) => `@font-face{font-family:"${family}";font-weight:${weight};src:url("${url}")}`).join("\n");

async function getChineseFontStyles(tile: HTMLElement) {
  const simplified = tile.matches(":lang(zh-Hans)");
  if (!simplified && !tile.matches(":lang(zh-Hant)")) return "";

  const [serif, sans] = await (simplified
    ? Promise.all([
        import("../assets/fonts/notoserifsc-azulejo.woff2?inline"),
        import("../assets/fonts/notosanssc-azulejo.woff2?inline")
      ])
    : Promise.all([
        import("../assets/fonts/notoseriftc-azulejo.woff2?inline"),
        import("../assets/fonts/notosanstc-azulejo.woff2?inline")
      ]));
  const script = simplified ? "SC" : "TC";
  return `
    @font-face{font-family:"Noto Serif ${script}";font-weight:200 900;src:url("${serif.default}")}
    @font-face{font-family:"Noto Sans ${script}";font-weight:100 900;src:url("${sans.default}")}
  `;
}

export function shouldIgnoreScreenshotElement(tile: HTMLElement, element: Element): boolean {
  if (element.contains(tile)) return false;
  if (!tile.contains(element)) return true;
  // Exclude whole hidden subtrees, not decorative aria-hidden icons.
  return element.matches('.tile-face[aria-hidden="true"], .example-body[aria-hidden="true"]');
}

const corners = [
  ["top-left", 0],
  ["top-right", 90],
  ["bottom-right", 180],
  ["bottom-left", 270]
] as const;

function replaceCornerDecoration(tile: HTMLElement) {
  const face = tile.querySelector<HTMLElement>(".tile-face");
  if (!face) return;
  // html2canvas materializes ::before as the first child before calling onclone.
  const originalDecoration = face.querySelector(":scope > html2canvaspseudoelement:first-child");
  const overlay = tile.ownerDocument.createElement("span");
  overlay.className = "flashcard-screenshot-corners";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = corners.map(([corner, angle]) => `
    <svg data-corner="${corner}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 152">
      <g transform="rotate(${angle} 76 76)">
        <path d="M0 58 A58 58 0 0 0 58 0" fill="none" stroke="#1f3a93" stroke-opacity=".7" stroke-width="6"/>
        <ellipse cx="118" cy="42" rx="15" ry="37" fill="#75b1de" fill-opacity=".58"/>
        <ellipse cx="42" cy="118" rx="37" ry="15" fill="#75b1de" fill-opacity=".52"/>
        <ellipse cx="78" cy="82" rx="18" ry="50" fill="none" stroke="#1f3a93" stroke-opacity=".68" stroke-width="3"/>
        <ellipse cx="82" cy="78" rx="50" ry="18" fill="none" stroke="#16327a" stroke-opacity=".64" stroke-width="3"/>
        <path d="M96 96 62 69 69 61Z M96 96 92 53 104 53Z" fill="#16327a" fill-opacity=".62"/>
        <path d="M96 96 77 56 87 53Z" fill="#75b1de" fill-opacity=".62"/>
      </g>
    </svg>`).join("");
  if (originalDecoration) originalDecoration.replaceWith(overlay);
  else face.prepend(overlay);
}

function readLocalStyles(document: Document): string {
  return Array.from(document.styleSheets).flatMap((sheet) => {
    if (sheet.disabled || (sheet.href && new URL(sheet.href).origin !== document.location.origin)) return [];
    return Array.from(sheet.cssRules, (rule) => rule.cssText)
      .filter((rule) => !/@(?:font-face|import)\b|\b(?:url|image-set)\(/i.test(rule));
  }).join("\n");
}

export async function captureFlashcard(tile: HTMLElement, signal?: AbortSignal): Promise<Blob> {
  const { width, height } = tile.getBoundingClientRect();
  if (width <= 0 || height <= 0) throw new Error("The flashcard is not visible.");

  const sourceDocument = tile.ownerDocument;
  const styles = readLocalStyles(sourceDocument);
  const chineseFonts = await getChineseFontStyles(tile);
  const canvas = await html2canvas(tile, {
    width,
    height,
    scale: Math.min(3, Math.max(2, sourceDocument.defaultView?.devicePixelRatio ?? 1)),
    scrollX: 0,
    scrollY: 0,
    backgroundColor: null,
    foreignObjectRendering: false,
    useCORS: false,
    customIsSameOrigin: () => false,
    logging: false,
    signal,
    ignoreElements: (element) => element !== sourceDocument.head && shouldIgnoreScreenshotElement(tile, element),
    async onclone(document, clone) {
      // No page resources are copied into the iframe. The fonts are bundled data URLs.
      const policy = document.createElement("meta");
      policy.httpEquiv = "Content-Security-Policy";
      policy.content = "default-src 'none'; style-src 'unsafe-inline'; font-src data:; img-src data: blob:";
      document.head.prepend(policy);
      const stylesheet = document.createElement("style");
      stylesheet.textContent = `${styles}\n${fonts}\n${chineseFonts}`;
      document.head.append(stylesheet);
      clone.classList.add("flashcard-screenshot-capture");
      Object.assign(clone.style, { width: `${width}px`, height: `${height}px`, maxWidth: "none" });
      replaceCornerDecoration(clone);
      // Read layout before awaiting fonts so the capture document starts loading the used faces.
      clone.getBoundingClientRect();
      await document.fonts?.ready;
    }
  });

  try {
    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((png) => png ? resolve(png) : reject(new Error("Could not encode the flashcard PNG.")), "image/png");
    });
  } finally {
    canvas.width = canvas.height = 0;
  }
}
