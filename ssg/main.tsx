import { renderToString } from "solid-js/web";
import Document from "./Document";
import * as fs from "fs";
import * as path from "path";

const { html, script } = renderToString(() => <Document />);

fs.writeFileSync(
  path.resolve(__dirname, "../public/index.html"),
  html + script
);
