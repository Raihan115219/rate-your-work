import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Home from "../Pages/Home/Home";
import MainPage from "../Pages/Login/MainPage";
import NotFound from "../Pages/NotFound/NotFound";
import Service from "../Pages/Service/Service";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/RegisTrations/Registration";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import MyReview from "../Pages/My-Review/MyReview";
import AddService from "../Pages/Add-Service/AddService";
import BlogPage from "../Pages/BlogPage/BlogPage";

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
        path: "/review",
        element: <MyReview></MyReview>,
      },
      {
        path: "/add",
        element: <AddService></AddService>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <Registration></Registration>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default router;
