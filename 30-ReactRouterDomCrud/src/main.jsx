import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import FavoritesProvider from "./Context/FavoritesContext/index.jsx";
import BasketProvider from "./Context/BasketContext/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </FavoritesProvider>
  </BrowserRouter>
);
