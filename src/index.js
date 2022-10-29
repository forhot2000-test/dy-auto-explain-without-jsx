import * as React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("app");

ReactDOM.render(
  // <StrictMode>...</StrictMode>
  React.createElement(
    React.StrictMode,
    null,
    // <App />
    React.createElement(App)
  ),
  rootElement
);
