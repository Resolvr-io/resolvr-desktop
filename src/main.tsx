import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/globals.css";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./components/theme/theme-provider";

import "./lib/nostr";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
