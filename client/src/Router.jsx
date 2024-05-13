import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./components/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
        loader: () => axios.get(`https://rickandmortyapi.com/api/character`),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
        loader: ({ params }) =>
          fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
      },
    ],
  },
]);

export default router;
