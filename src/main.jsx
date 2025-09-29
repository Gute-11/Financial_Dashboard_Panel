import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Receitas from "./pages/Receitas.jsx";
import Despesas from "./pages/Despesas.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Receitas",
    element: <Receitas />,
  },
  {
    path: "/Despesas",
    element: <Despesas />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
  {
    path: "/Login",
    element: <Login />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
