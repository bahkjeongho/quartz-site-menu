import { defineConfig } from "tsup";
import type { Plugin } from "esbuild";
import { validateManifest } from "./src/build/validate-manifest";

validateManifest();

/** SCSS를 CSS 문자열로 컴파일한다 (Quartz v5 코어와 같은 방식). */
const scssPlugin: Plugin = {
  name: "scss-loader",
  setup(parentBuild) {
    // SCSS files are compiled to CSS via sass, matching Quartz v5 core behavior
    parentBuild.onLoad({ filter: /\.scss$/ }, async (args) => {
      const sass = await import("sass");
      const result = sass.compile(args.path);
      return { contents: result.css, loader: "text" };
    });
  },
};

/**
 * Singleton externals: packages that MUST be the same instance at runtime
 * across all plugins and the Quartz host. Everything else gets bundled.
 */
const SINGLETON_EXTERNALS = [
  "preact",
  "preact/hooks",
  "preact/jsx-runtime",
  "preact/compat",
  "@jackyzha0/quartz",
  "@jackyzha0/quartz/*",
  "vfile",
  "vfile/*",
  "unified",
];

export default defineConfig({
  entry: {
    index: "src/index.ts",
    types: "src/types.ts",
    "components/index": "src/components/index.ts",
  },
  format: ["esm"],
  dts: true,
  tsconfig: "tsconfig.build.json",
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: "es2022",
  splitting: false,
  outDir: "dist",
  platform: "node",
  noExternal: [/.*/],
  external: SINGLETON_EXTERNALS,
  banner: {
    js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "preact";
  },
  esbuildPlugins: [scssPlugin],
});
