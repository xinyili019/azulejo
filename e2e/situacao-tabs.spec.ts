import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

async function openSituacoes(
  page: import("@playwright/test").Page,
  language: "pt-en" | "pt-zh-hans" | "pt-zh-hant"
) {
  await page.goto("/");
  await page.evaluate(async () => {
    localStorage.clear();
    await new Promise<void>((resolve) => {
      const request = indexedDB.deleteDatabase("azulejo");
      request.onsuccess = request.onerror = request.onblocked = () => resolve();
    });
  });
  await page.reload();
  await page.waitForTimeout(500);
  await page.locator(".entry-language-control select").selectOption(language);
  const situationName = language === "pt-zh-hant" ? /^場景/ : language === "pt-zh-hans" ? /^场景/ : /^Situation/;
  const situationsButton = page.getByRole("button", { name: situationName });
  await expect(situationsButton).toBeVisible();
  await situationsButton.click();
  const skipTour = page.getByRole("button", { name: /Skip tour|跳过导览|略過導覽/ });
  if (await skipTour.isVisible()) await skipTour.click();
}

for (const language of ["pt-en", "pt-zh-hans", "pt-zh-hant"] as const) {
  test(`slides one measured glass thumb without moving labels in ${language}`, async ({ page }) => {
    await openSituacoes(page, language);

    const track = page.locator(".situacao-tabs");
    const thumb = track.locator(".situacao-tabs-thumb");
    const labels = track.getByRole("tab");
    const expectedLabels =
      language === "pt-zh-hant"
        ? ["單字", "對話", "速查卡"]
        : language === "pt-zh-hans"
          ? ["词汇", "对话", "速查卡"]
          : ["Vocabulary", "Dialogue", "Cheat sheet"];
    await expect(labels).toHaveText(expectedLabels);
    await expect(thumb).toHaveCount(1);
    await expect(track).toHaveCSS("padding-left", "3px");
    await expect(labels.first()).toHaveCSS("min-height", "44px");

    const initialPositions = await labels.evaluateAll((buttons) =>
      buttons.map((button) => button.getBoundingClientRect().left)
    );
    await labels.nth(1).click();
    await page.waitForTimeout(360);
    await expect(labels.nth(1)).toHaveAttribute("aria-selected", "true");
    const dialogueWidth = (await thumb.boundingBox())!.width;
    const dialogueButtonWidth = (await labels.nth(1).boundingBox())!.width;
    expect(Math.abs(dialogueWidth - dialogueButtonWidth)).toBeLessThan(0.5);
    expect(await labels.evaluateAll((buttons) => buttons.map((button) => button.getBoundingClientRect().left))).toEqual(
      initialPositions
    );

    await labels.nth(2).dispatchEvent("pointerdown", { pointerId: 1, pointerType: "touch", isPrimary: true });
    await expect(track).toHaveClass(/is-pressing/);
    await page.waitForTimeout(140);
    const pressTransform = await thumb.evaluate((element) => getComputedStyle(element, "::before").transform);
    const pressScale = Number.parseFloat(pressTransform.match(/matrix\(([^,]+)/)?.[1] ?? "1");
    expect(pressScale).toBeLessThan(0.99);
    expect(pressScale).toBeGreaterThanOrEqual(0.96);
    await labels.nth(2).dispatchEvent("pointerup", { pointerId: 1, pointerType: "touch", isPrimary: true });
    await expect(track).not.toHaveClass(/is-pressing/);

    await page.screenshot({ path: `/tmp/azulejo-situacao-tabs-${language}.png` });
  });
}

test("removes segmented-control motion when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openSituacoes(page, "pt-en");
  await expect(page.locator(".situacao-tabs-thumb")).toHaveCSS("transition-duration", "0s");
  await expect(page.locator(".situacao-tabs button").first()).toHaveCSS("transition-duration", "0s");
});
