import { describe, it, expect } from "vitest";
import { isCurrent, pathToRoot } from "../src/util/active";

describe("isCurrent", () => {
  it("폴더 항목은 그 폴더 아래 전체를 현재 구역으로 본다", () => {
    expect(isCurrent("2-wiki/BIG", "2-wiki/")).toBe(true);
    expect(isCurrent("2-wiki/sub/deep", "2-wiki/")).toBe(true);
    expect(isCurrent("2-wiki", "2-wiki/")).toBe(true);
    expect(isCurrent("2-wiki/index", "2-wiki/")).toBe(true);
  });

  it("다른 구역은 현재가 아니다", () => {
    expect(isCurrent("3-object/31-music/x", "2-wiki/")).toBe(false);
    expect(isCurrent("2-wikipedia/x", "2-wiki/")).toBe(false);
  });

  it("노트 항목(About)은 그 노트가 든 폴더를 같은 구역으로 본다", () => {
    expect(isCurrent("4-about/About", "4-about/About")).toBe(true);
    expect(isCurrent("4-about/Other", "4-about/About")).toBe(true);
    expect(isCurrent("1-thoughts/Example", "4-about/About")).toBe(false);
  });

  it("홈은 아무것도 선택하지 않는다", () => {
    expect(isCurrent("index", "2-wiki/")).toBe(false);
    expect(isCurrent("", "2-wiki/")).toBe(false);
  });
});

describe("pathToRoot", () => {
  it("현재 페이지 깊이만큼 올라간다", () => {
    expect(pathToRoot("index")).toBe(".");
    expect(pathToRoot("2-wiki/BIG")).toBe("..");
    expect(pathToRoot("2-wiki/index")).toBe("..");
    expect(pathToRoot("3-object/31-music/x")).toBe("../..");
  });
});
