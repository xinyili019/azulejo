import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const nativeStoreBridge = (window as Window & {
  webkit?: { messageHandlers?: { store?: unknown } };
}).webkit?.messageHandlers?.store;

if ("serviceWorker" in navigator && !nativeStoreBridge) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => undefined);
  });
}
