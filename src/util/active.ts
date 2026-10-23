const trim = (s: string) => s.replace(/^\/+|\/+$/g, "");

/**
 * 현재 페이지(slug)가 메뉴 항목의 구역에 속하는지 판단한다.
 * 항목 경로가 "폴더/"면 그 폴더 아래 전체, 노트 경로면 그 폴더(노트가 든 구역)까지 같은 구역으로 본다.
 * 홈("index")은 어떤 항목에도 속하지 않는다.
 */
export function isCurrent(slug: string, itemPath: string): boolean {
  const page = trim(slug);
  const item = trim(itemPath);
  if (!page || page === "index" || !item) return false;

  const section = itemPath.endsWith("/") ? item : item.split("/").slice(0, -1).join("/") || item;
  return page === section || page.startsWith(section + "/");
}

/** 현재 페이지에서 사이트 루트로 가는 상대 경로. "index" → ".", "2-wiki/BIG" → "..", "a/b/c" → "../.." */
export function pathToRoot(slug: string): string {
  const depth = trim(slug).split("/").length - 1;
  return depth <= 0 ? "." : Array(depth).fill("..").join("/");
}
