import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BoardsContextProvider } from "./contexts/BoardsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoardsContextProvider>
      <App />
    </BoardsContextProvider>
  </StrictMode>
);
