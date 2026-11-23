import { expect, test } from "@playwright/test";

for (const viewport of [
  { name: "phone", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 900 }
]) {
  test(`keeps a long expanded example inside the tile on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");
    await page.evaluate(async () => {
      localStorage.clear();
      await new Promise<void>((resolve) => {
        const request = indexedDB.deleteDatabase("azulejo");
        request.onsuccess = request.onerror = request.onblocked = () => resolve();
      });
    });
    await page.reload();

    await page.getByRole("button", { name: /^Manual/ }).click();
    await page.getByRole("button", { name: "Skip tour" }).click();
    await page.locator(".study-selector-pill").selectOption("Módulo 12");

    for (let index = 0; index < 19; index += 1) {
      await page.locator(".flip-tile").click();
      await page.locator(".review-known").click();
    }

    await expect(page.locator(".flip-tile")).toContainText("empregador");
    if (viewport.name === "phone") {
      const frontWord = await page.locator(".tile-front .prompt").evaluate((element) => {
        const word = element as HTMLElement;
        const tile = word.closest(".tile-front")!.getBoundingClientRect();
        const rect = word.getBoundingClientRect();
        return {
          fontSize: Number.parseFloat(getComputedStyle(word).fontSize),
          fits: rect.top >= tile.top && rect.bottom <= tile.bottom && rect.left >= tile.left && rect.right <= tile.right
        };
      });
      expect(frontWord.fontSize).toBe(40);
      expect(frontWord.fits).toBe(true);
    }
    await page.locator(".flip-tile").click();
    await page.locator(".example-toggle").click();
    await page.waitForTimeout(400);

    const layout = await page.locator(".tile-back").evaluate((tile) => {
      const tileRect = tile.getBoundingClientRect();
      const portuguese = tile.querySelector<HTMLElement>(".example-with-audio > span")!;
      const translation = tile.querySelector<HTMLElement>(".example-body .example")!;
      const insideTile = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= tileRect.top && rect.bottom <= tileRect.bottom && rect.left >= tileRect.left && rect.right <= tileRect.right;
      };

      return {
        portugueseFontSize: Number.parseFloat(getComputedStyle(portuguese).fontSize),
        translationFontSize: Number.parseFloat(getComputedStyle(translation).fontSize),
        portugueseFits: portuguese.scrollHeight <= portuguese.clientHeight + 1 && insideTile(portuguese),
        translationFits: translation.scrollHeight <= translation.clientHeight + 1 && insideTile(translation)
      };
    });

    expect(layout.portugueseFits).toBe(true);
    expect(layout.translationFits).toBe(true);
    expect(layout.portugueseFontSize).toBeGreaterThanOrEqual(24);
    expect(layout.translationFontSize).toBeGreaterThanOrEqual(viewport.name === "phone" ? 21 : 20.48);
  });
}
