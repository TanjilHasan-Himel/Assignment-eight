import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Apps from "../pages/Apps.jsx";
import AppDetails from "../pages/AppDetails.jsx";
import Installation from "../pages/Installation.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import appsData from "../data/apps.json";

const sleep = (ms = 350) => new Promise((r) => setTimeout(r, ms));

async function appsLoader() {
  await sleep();
  return appsData;
}

async function appDetailsLoader({ params }) {
  await sleep();
  const id = Number(params.id);
  const app = appsData.find((a) => a.id === id) || null;
  return { app, allApps: appsData };
}

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: appsLoader },
      { path: "apps", element: <Apps />, loader: appsLoader },
      { path: "apps/:id", element: <AppDetails />, loader: appDetailsLoader },
      { path: "installation", element: <Installation />, loader: appsLoader },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
