export interface SiteMenuItem {
  /** 메뉴에 표시할 이름 (예: Wiki) */
  label: string;
  /** 사이트 루트 기준 경로, 앞의 / 없이 (예: "2-wiki/", "4-about/About") */
  path: string;
}

export interface SiteMenuOptions {
  /** 메뉴 항목 (위에서 아래, 또는 왼쪽에서 오른쪽 순서) */
  items?: SiteMenuItem[];
}
