import { createHashRouter } from "react-router-dom";
import App from "./App";

import ErrorPage from "./pages/ErrorPage";
import UserSelectPage from "./pages/UserSelectPage";
import FilmDisplayPage from "./pages/FilmDisplayPage";
import FilmDetailPage from "./pages/FilmDetailPage";
import FilterDisplayPage from "./pages/FilterDisplayPage";
import NotFoundPage from "./pages/NotFoundPage";

import { LoadUsers } from "./utilities";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: LoadUsers,
    children: [
      {
        index: true,
        element: <UserSelectPage />,
      },
      {
        path: "films",
        element: <FilmDisplayPage />,
      },
      {
        path: "films/:id",
        element: <FilmDetailPage />,
      },
      {
        path: "filter/:param",
        element: <FilterDisplayPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
