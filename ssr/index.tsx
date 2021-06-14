import { renderToString } from "solid-js/web";
import App from "../src/App";

const { html, script } = renderToString(() => <App />);

console.log({ html, script });
