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
import EditReview from "../Components/EditReview/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:9000/limit"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:9000/limit"),
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/review",
        element: (
          <PrivetRoute>
            <MyReview></MyReview>
          </PrivetRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivetRoute>
            <AddService></AddService>
          </PrivetRoute>
        ),
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
        loader: () => fetch("http://localhost:9000/blog"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/service/${params.id}`),
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
        path: "/update/:id",
        element: <EditReview></EditReview>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default router;
