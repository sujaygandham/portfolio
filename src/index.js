import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

export const myCache = createCache({
  nonce: "cG9ydGZvbGlvCg==",
});

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={myCache}>
      <Router>
        <App />
      </Router>
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
