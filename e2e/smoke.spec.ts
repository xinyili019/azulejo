import { expect, test } from "@playwright/test";

test("reviews one card and persists progress", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /^Manual/ }).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await page.getByRole("button", { name: /reveal/i }).click();
  await page.getByRole("button", { name: /known/i }).click();
  await page.reload();

  await expect(page.getByLabel("Progress dashboard")).toContainText("reviewed");
});

test("loads only the chosen learning language and keeps it after reload", async ({ page }) => {
  const translationRequests: string[] = [];
  page.on("request", (request) => {
    const match = request.url().match(/\/data\/translations\/(\w+)\.json/);
    if (match && match[1] !== "overrides") translationRequests.push(match[1]);
  });

  await page.goto("/");
  await page.getByRole("button", { name: /^Manual/ }).waitFor();
  expect(translationRequests).toEqual([]);

  await page.locator(".entry-language-control select").selectOption("pt-uk");
  await expect(page.getByRole("button", { name: /^Підручник/ })).toBeVisible();
  expect(translationRequests).toEqual(["uk"]);

  await page.reload();
  await expect(page.getByRole("button", { name: /^Підручник/ })).toBeVisible();
});
