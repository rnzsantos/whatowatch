import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MovieCasts from "./pages/MovieCasts";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import SearchedMovies from "./pages/SearchedMovies";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "movies/:movieId/casts",
        element: <MovieCasts />,
      },
      {
        path: "movies/search",
        element: <SearchedMovies />,
      },
    ],
  },
]);

export default routes;
