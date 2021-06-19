const path = require("path");
const renderStatic = require("solid-ssr/static");

const PAGES = ["index", "bye"];
const server = path.resolve(__dirname, "./build/main.js");
const public = path.resolve(__dirname, "../build");

renderStatic(
  PAGES.map((p) => ({
    entry: server,
    output: path.join(public, `${p}.html`),
    url: p === "index" ? "/" : `/${p}`,
  }))
);
