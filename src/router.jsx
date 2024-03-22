import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import CronogramaPage from "./views/CronogramaPage";
import ErrorPage from "./views/ErrorPage";
import HomePage from "./views/HomePage";
import MetodologiaPage from "./views/MetodologiaPage";
import OdsPage from "./views/OdsPage";
import QuienesSomosPage from "./views/QuienesSomosPage";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cronograma" element={<CronogramaPage />} />
        <Route path="/ods" element={<OdsPage />} />
        <Route path="/metodologiaYactividades" element={<MetodologiaPage />} />
        <Route path="/quienesSomos" element={<QuienesSomosPage />} />
      </Route>
    </Route>
  )
);
