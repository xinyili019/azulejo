import { describe, expect, it } from "vitest";
import {
  getFinalMilestoneCopy,
  getMilestoneActionLabel,
  getModuleMilestoneCopy,
  getSessionMilestoneCopy,
  REVIEW_MODE
} from "../src/lib/milestoneCopy";

describe("milestone copy", () => {
  it("localizes the session milestone count and action labels", () => {
    expect(getSessionMilestoneCopy("pt-en", 42)).toEqual({
      title: "Congrats! You have recognized 42 words!",
      actions: [
        {
          id: REVIEW_MODE.sessionAgainFlashcards,
          label: "Review new words"
        },
        {
          id: REVIEW_MODE.sessionNewTypedPortuguese,
          label: "Recall new words"
        }
      ]
    });

    expect(getSessionMilestoneCopy("pt-zh-hans", 42).title).toBe("恭喜！你已经认出 42 个词！");
    expect(getSessionMilestoneCopy("pt-zh-hans", 42).actions.map((action) => action.label)).toEqual([
      "复习生词",
      "测试生词"
    ]);
    expect(getSessionMilestoneCopy("zh-hant-pt", 42).title).toBe("恭喜！你已經認出 42 個單字！");
    expect(getSessionMilestoneCopy("zh-hant-pt", 42).actions.map((action) => action.label)).toEqual([
      "複習生字",
      "測試生字"
    ]);
  });

  it("uses singular English wording for one recognized word", () => {
    expect(getSessionMilestoneCopy("en-pt", 1).title).toBe("Congrats! You have recognized 1 word!");
  });

  it("returns module milestone copy for Again words since first encounter", () => {
    expect(getModuleMilestoneCopy("pt-en", "Modulo 3")).toEqual({
      title: "Congrats! You have finished Modulo 3.",
      actions: [
        {
          id: REVIEW_MODE.moduleAgainTypedPortuguese,
          label: "Recall new words"
        }
      ]
    });

    expect(getModuleMilestoneCopy("pt-zh-hans", "Modulo 3").title).toBe("恭喜！你已经完成模块 3。");
    expect(getModuleMilestoneCopy("pt-zh-hans", "Modulo 3").actions[0].label).toBe("测试生词");
    expect(getModuleMilestoneCopy("pt-zh-hant", "Modulo 3").title).toBe("恭喜！你已經完成模組 3。");
    expect(getModuleMilestoneCopy("pt-zh-hant", "Modulo 3").actions[0].label).toBe("測試生字");
  });

  it("returns final all-module randomized type-out options", () => {
    expect(getFinalMilestoneCopy("pt-en")).toEqual({
      title: "Congrats! You have finished all modules.",
      actions: [
        {
          id: REVIEW_MODE.finalAllRandomTypedPortuguese,
          label: "Type out all Portuguese words (randomized)"
        },
        {
          id: REVIEW_MODE.finalFirstPassUnknownRandomTypedPortuguese,
          label: "Type out first-pass unknown words (randomized)"
        }
      ]
    });

    expect(getFinalMilestoneCopy("zh-hans-pt").actions.map((action) => action.label)).toEqual([
      "随机输入全部葡语词",
      "随机输入第一遍未掌握的葡语词"
    ]);
    expect(getFinalMilestoneCopy("zh-hant-pt").actions.map((action) => action.label)).toEqual([
      "隨機輸入全部葡語單字",
      "隨機輸入第一遍未掌握的葡語單字"
    ]);
  });

  it("can fetch one action label by review mode", () => {
    expect(getMilestoneActionLabel("pt-zh-hans", REVIEW_MODE.sessionNewTypedPortuguese)).toBe(
      "测试生词"
    );
  });
});
