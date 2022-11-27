import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Collections from "../Pages/Collections/Collections";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UpdateAccountInfo from "../Pages/MyProfile/UpdateAccountInfo/UpdateAccountInfo";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch(` https://bechedaw-server.vercel.app/category/`);
        },
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/collections",
        loader: () => {
          return fetch("https://bechedaw-server.vercel.app/allProducts");
        },
        element: <Collections />,
      },

      {
        path: "/updateProfile",
        element: (
          <PrivateRouter>
            <UpdateAccountInfo />
          </PrivateRouter>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
