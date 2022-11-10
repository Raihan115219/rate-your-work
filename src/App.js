import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/Login/MainPage";
import router from "./Router/Routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
        <title>React app</title>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
