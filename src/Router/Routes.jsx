import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Home from "../Pages/Home/Home";
import MainPage from "../Pages/login/MainPage";
import NotFound from "../Pages/NotFound/NotFound";
import Service from "../Pages/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default router;
