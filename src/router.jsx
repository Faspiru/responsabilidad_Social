import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import ArtworksPage from "./views/ArtworksPage";
import CalendarPage from "./views/CalendarPage";
import ErrorPage from "./views/ErrorPage";
import HomePage from "./views/HomePage";
import ToursPage from "./views/ToursPage";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/obras" element={<ArtworksPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/buscar" element={<ToursPage />} />
      </Route>
    </Route>
  )
);
