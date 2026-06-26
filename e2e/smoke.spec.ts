import { expect, test } from "@playwright/test";

test("reviews one card and persists progress", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /reveal/i }).click();
  await page.getByRole("button", { name: /known/i }).click();
  await page.reload();

  await expect(page.getByLabel("Progress dashboard")).toContainText("reviewed");
});
