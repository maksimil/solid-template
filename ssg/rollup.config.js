import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default [
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
        extensions: [".tsx", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".tsx", ".ts"],
        presets: [
          ["solid", { generate: "ssr", hydratable: true }],
          "@babel/preset-typescript",
        ],
      }),
    ],
  },
];
