import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const extensions = [".ts", ".tsx"];

export default [
  // {
  //   input: "ssg/index.tsx",
  //   output: [
  //     {
  //       dir: "ssg/public/js",
  //       format: "esm",
  //     },
  //   ],
  //   plugins: [
  //     nodeResolve({ extensions, exportConditions: ["node"] }),
  //     babel({
  //       babelHelpers: "bundled",
  //       extensions,
  //       presets: [
  //         ["solid", { generate: "dom", hydratable: true }],
  //         "@babel/preset-typescript",
  //       ],
  //     }),
  //     // terser(),
  //   ],
  // },
  {
    input: "ssg/main.tsx",
    output: [
      {
        dir: "ssg/build",
        exports: "auto",
        format: "cjs",
      },
    ],
    external: ["solid-js", "solid-js/web"],
    plugins: [
      nodeResolve({
        preferBuiltins: true,
        exportConditions: ["node"],
        extensions,
      }),
      babel({
        babelHelpers: "bundled",
        extensions,
        presets: [
          ["solid", { generate: "ssr", hydratable: true }],
          "@babel/preset-typescript",
        ],
      }),
    ],
  },
];
