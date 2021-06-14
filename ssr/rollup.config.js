import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "ssr/index.tsx",
    output: [
      {
        format: "cjs",
      },
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true, exportConditions: ["solid"] }),
      babel({
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-typescript",
          ["solid", { generate: "ssr", hydratable: true }],
        ],
      }),
    ],
    preserveEntrySignatures: false,
  },
];
