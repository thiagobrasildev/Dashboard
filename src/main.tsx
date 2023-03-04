import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./router/DashboardPage";
import { OverviewPage } from "./router/OverviewPage";
import { ViewsPage } from "./router/ViewsPage";
import { TrafficPage } from "./router/TrafficPage";
import { GeoPage } from "./router/GeoPage";
import { OrdersPage } from "./router/OrdersPage";
import { NewsPage } from "./router/NewsPage";
import { GeneralPage } from "./router/GeneralPage";
import { HistoryPage } from "./router/HistoryPage";
import { SettingsPage } from "./router/SettingsPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/overview",
        element: <OverviewPage />,
      },
      {
        path: "/views",
        element: <ViewsPage />,
      },
      {
        path: "/traffic",
        element: <TrafficPage />,
      },
      {
        path: "/geo",
        element: <GeoPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/general",
        element: <GeneralPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      // {
      //   path: "/notfound",
      //   element: <NotfoundPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
