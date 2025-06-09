/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename="/cloud-transformation">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
