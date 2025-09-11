import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Receitas from "./pages/Receitas.jsx";
import Despesas from "./pages/Despesas.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/receitas",
    element: <Receitas />,
  },
  {
    path: "/despesas",
    element: <Despesas />,
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
