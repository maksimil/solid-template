import { renderToString } from "solid-js/web";
import Document from "./Document";
import * as fs from "fs";
import * as path from "path";

const html = renderToString(() => <Document />);

fs.writeFileSync(path.resolve(__dirname, "../../build/index.html"), html);
