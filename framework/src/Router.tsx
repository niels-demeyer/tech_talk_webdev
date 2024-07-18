import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Start from "./pages/Start";
import Leaderboard from "./pages/Leaderboard";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "",
          element: <Start />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "leaderboard",
          element: <Leaderboard />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
  {
    basename: process.env.NODE_ENV === "production" ? "/fauxpix" : "",
  }
);
