import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/login/MainPage";
import router from "./Router/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
