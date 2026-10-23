import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import type { SiteMenuOptions } from "../types";
import { isCurrent, pathToRoot } from "../util/active";
import style from "./styles/site-menu.scss";

export type { SiteMenuOptions };

export default ((opts?: SiteMenuOptions) => {
  const items = opts?.items ?? [];

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    if (items.length === 0) return null;

    const slug = props.fileData.slug ?? "index";
    // 배포 주소(/hide-park/)와 로컬(/) 모두에서 맞도록 현재 페이지 기준 상대 경로를 만든다.
    const root = pathToRoot(slug);

    return (
      <nav class="site-menu" aria-label="Site">
        <ul>
          {items.map((item) => {
            const current = isCurrent(slug, item.path);
            return (
              <li>
                <a
                  href={`${root}/${item.path}`}
                  class={current ? "site-menu__link is-current" : "site-menu__link"}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  Component.css = style;
  return Component;
}) satisfies QuartzComponentConstructor;
