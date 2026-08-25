import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test("renders every study surface on the shared navy ground", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(async () => {
    localStorage.clear();
    await new Promise<void>((resolve) => {
      const request = indexedDB.deleteDatabase("azulejo");
      request.onsuccess = request.onerror = request.onblocked = () => resolve();
    });
  });
  await page.reload();

  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.locator(".entry-header .settings-popover")).toBeVisible();
  await expect(page.locator(".entry-header .settings-popover")).toContainText("Auto audio");
  await expect(page.locator(".entry-header .settings-popover")).toContainText("Replay tour");
  await page.screenshot({ path: "/tmp/azulejo-entry-settings.png" });
  await page.getByRole("button", { name: "Settings" }).click();

  await page.getByRole("button", { name: /^Manual/ }).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(page.locator(".study-selector-pill option[value='Módulo 1']")).toHaveText("Módulo 1 · Basics - Básico");
  await expect(page.locator(".study-app-shell")).toHaveCSS("background-color", "rgb(35, 45, 112)");
  await expect(page.locator(".tile-shell")).toHaveCSS("padding-left", "8px");
  await expect(page.locator(".tile-shell")).toHaveCSS("padding-bottom", "8px");
  await expect(page.locator(".tile-shell")).toHaveCSS("background-color", "rgb(251, 248, 241)");
  await expect(page.locator(".tile-shell")).toHaveCSS("border-radius", "6px");
  await expect(page.locator(".tile-shell")).toHaveCSS("overflow", "hidden");
  await expect(page.locator(".tile-shell")).toHaveCSS("border-top-width", "0px");
  await expect(page.locator(".tile-shell")).toHaveCSS("box-shadow", "none");
  await expect(page.locator(".tile-shell > .flip-tile")).toHaveCount(1);
  await expect(page.locator(".tile-stage")).toHaveCount(0);
  await expect(page.locator(".flip-tile")).toHaveCSS("border-radius", "0px");
  await expect(page.locator(".tile-face").first()).toHaveCSS("border-top-width", "0px");
  await expect(page.locator(".tile-face").first()).toHaveCSS("border-radius", "0px");
  await expect(page.locator(".tile-face").first()).toHaveCSS("box-shadow", "none");
  await expect(page.locator(".pronunciation-control")).toHaveCSS("background-color", "rgb(251, 248, 241)");
  await expect(page.locator(".module-quiz-start")).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect(page.locator(".module-quiz-start")).toHaveCSS("color", "rgb(251, 248, 241)");
  await page.screenshot({ path: "/tmp/azulejo-navy-manual.png" });

  await page.locator(".flip-tile").click();
  await page.waitForTimeout(420);
  const cardSpacing = await page.locator(".flashcard").evaluate((flashcard) => {
    const shell = flashcard.querySelector(".tile-shell")!.getBoundingClientRect();
    const tile = flashcard.querySelector(".flip-tile")!.getBoundingClientRect();
    const controls = flashcard.querySelector(".flashcard-controls")!.getBoundingClientRect();
    return {
      tileInsideFrame:
        tile.left >= shell.left && tile.right <= shell.right && tile.top >= shell.top && tile.bottom <= shell.bottom,
      tileInsets: [tile.top - shell.top, shell.right - tile.right, shell.bottom - tile.bottom, tile.left - shell.left],
      controlsGap: controls.top - shell.bottom
    };
  });
  expect(cardSpacing.tileInsideFrame).toBe(true);
  expect(cardSpacing.tileInsets.every((inset) => Math.abs(inset - 8) < 0.5)).toBe(true);
  expect(cardSpacing.controlsGap).toBeGreaterThanOrEqual(12);
  const backAudioIcons = page.locator(".tile-back .tile-audio-icon");
  await expect(backAudioIcons).toHaveCount(2);
  await expect(backAudioIcons.first()).toHaveCSS("width", "28px");
  await expect(backAudioIcons.last()).toHaveCSS("width", "28px");
  await page.screenshot({ path: "/tmp/azulejo-compact-back-audio.png" });
  await page.locator(".flip-tile").click();

  await page.locator(".dashboard").scrollIntoViewIfNeeded();
  await expect(page.locator(".dashboard")).toHaveCSS("background-color", "rgb(251, 248, 241)");
  const readinessLabelGap = await page.locator(".stat-main").evaluate((statMain) => {
    const value = statMain.querySelector(".stat-main-value")!.getBoundingClientRect();
    const label = statMain.querySelector("p")!.getBoundingClientRect();
    return label.top - value.bottom;
  });
  expect(readinessLabelGap).toBeGreaterThanOrEqual(7);
  await page.screenshot({ path: "/tmp/azulejo-navy-manual-progress.png" });

  await page.locator(".study-entry-back").click();
  await page.getByRole("button", { name: /^Situation/ }).click();
  await expect(page.locator(".study-selector-pill").locator("option[value='banco']")).toHaveText("Bank · Banco");
  await page.locator(".study-selector-pill").selectOption("cabeleireiro_barbeiro");
  await expect(page.locator(".study-selector-pill")).toHaveValue("cabeleireiro_barbeiro");
  await expect(page.locator(".flip-tile")).toBeVisible();
  await page.locator(".flip-tile").click();
  await page.locator(".review-known").click();
  await expect(page.locator(".flip-tile")).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator(".flip-tile")).toHaveCSS("transform", "none");
  await page.screenshot({ path: "/tmp/azulejo-navy-situacoes-vocabulario.png" });

  await page.getByRole("tab", { name: "Dialogue" }).click();
  await expect(page.locator(".dialogue-list")).toHaveCSS("background-color", "rgb(251, 248, 241)");
  await page.locator(".dialogue-turn").first().click();
  const dialogueTranslationSize = await page.locator(".dialogue-list .situacao-translation").first().evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).fontSize)
  );
  expect(dialogueTranslationSize).toBeGreaterThan(12);
  await page.screenshot({ path: "/tmp/azulejo-navy-situacoes-dialogo.png" });

  await page.getByRole("tab", { name: "Cheat sheet" }).click();
  await expect(page.locator(".situacao-card")).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await page.screenshot({ path: "/tmp/azulejo-navy-situacoes-cartao.png" });

  await page.locator(".dashboard").scrollIntoViewIfNeeded();
  await page.getByText("Practical life", { exact: true }).click();
  await expect(page.locator(".situacao-readiness-row", { hasText: "Hairdresser and barber" })).toContainText("1/34");
  await page.screenshot({ path: "/tmp/azulejo-navy-situacoes-progress.png" });

  await page.locator(".study-entry-back").click();
  await page.getByRole("button", { name: /^Manual/ }).click();
  await page.locator(".module-quiz-start").click();
  await expect(page.locator(".module-quiz")).toBeVisible();
  await page.screenshot({ path: "/tmp/azulejo-navy-quiz.png" });

  await page.getByRole("button", { name: "Exit quiz" }).click();
  await page.getByRole("button", { name: "Tap again to exit" }).click();
  for (let index = 0; index < 20; index += 1) {
    await page.locator(".flip-tile").click();
    await page.locator(".review-known").click();
  }
  await expect(page.locator(".milestone-panel")).toBeVisible();
  await page.screenshot({ path: "/tmp/azulejo-navy-milestone.png" });
});
