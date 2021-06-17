import { Component } from "solid-js";
import App from "../src/App";

const Document: Component = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};

export default Document;
