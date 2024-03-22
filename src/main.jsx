import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./main.scss";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Codigo Para el Futuro"
        defaultTitle="Codigo Para el Futuro"
      />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
