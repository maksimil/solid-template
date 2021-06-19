import { renderToStringAsync } from "solid-js/web";
import Document from "./Document";

export default (req: { url: string }) => {
  return renderToStringAsync(() => <Document initialURL={req.url} />);
};
