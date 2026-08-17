import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test("keeps each Manual walkthrough target and popup visible on a phone", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(async () => {
    localStorage.clear();
    await new Promise<void>((resolve) => {
      const request = indexedDB.deleteDatabase("azulejo");
      request.onsuccess = request.onerror = request.onblocked = () => resolve();
    });
  });
  await page.reload();

  await expect(page.locator(".tour-popup")).toHaveCount(0);
  await page.getByRole("button", { name: /^Manual/ }).click();

  const selectors = [
    ".study-entry-back",
    ".study-selector-pill",
    ".flip-tile",
    ".review-again",
    ".review-known",
    ".card-previous",
    ".module-quiz-start",
  ];

  for (let index = 0; index < selectors.length; index += 1) {
    const popup = page.locator(".tour-popup");
    const target = page.locator(selectors[index]);
    await expect(popup).toBeVisible();
    await expect(popup.locator(".tour-step-counter")).toHaveText(`${index + 1} / 7`);
    await expect(target).toBeInViewport();
    await expect(popup).toBeInViewport();
    await popup.getByRole("button", { name: "Got it" }).click();
  }

  await expect(page.locator(".tour-popup")).toHaveCount(0);
});
