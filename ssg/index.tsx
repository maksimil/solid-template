import { hydrate } from "solid-js/web";
import Document from "./Document";

(async () => {
  // @ts-ignore
  const preloadlist: string[] = await import("/js/preloadlist.js");

  hydrate(() => <Document preloadlist={preloadlist} />, document);
})();
