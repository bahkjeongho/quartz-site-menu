import { createRequire } from 'module';

createRequire(import.meta.url);

// src/util/active.ts
var trim = (s2) => s2.replace(/^\/+|\/+$/g, "");
function isCurrent(slug, itemPath) {
  const page = trim(slug);
  const item = trim(itemPath);
  if (!page || page === "index" || !item) return false;
  const section = itemPath.endsWith("/") ? item : item.split("/").slice(0, -1).join("/") || item;
  return page === section || page.startsWith(section + "/");
}
function pathToRoot(slug) {
  const depth = trim(slug).split("/").length - 1;
  return depth <= 0 ? "." : Array(depth).fill("..").join("/");
}

// src/components/styles/site-menu.scss
var site_menu_default = ".site-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem 1rem;\n}\n.site-menu .site-menu__link {\n  font-size: 14px;\n  line-height: 1.25;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  text-decoration: none;\n  background: none;\n  padding: 0;\n  color: var(--gray);\n}\n.site-menu .site-menu__link:hover, .site-menu .site-menu__link.is-current {\n  color: var(--darkgray);\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/SiteMenu.tsx
var SiteMenu_default = ((opts) => {
  const items = opts?.items ?? [];
  const Component = (props) => {
    if (items.length === 0) return null;
    const slug = props.fileData.slug ?? "index";
    const root = pathToRoot(slug);
    return /* @__PURE__ */ u2("nav", { class: "site-menu", "aria-label": "Site", children: /* @__PURE__ */ u2("ul", { children: items.map((item) => {
      const current = isCurrent(slug, item.path);
      return /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
        "a",
        {
          href: `${root}/${item.path}`,
          class: current ? "site-menu__link is-current" : "site-menu__link",
          "aria-current": current ? "page" : void 0,
          children: item.label
        }
      ) });
    }) }) });
  };
  Component.css = site_menu_default;
  return Component;
});

export { SiteMenu_default as SiteMenu };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map