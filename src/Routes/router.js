import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UpdateAccountInfo from "../Pages/MyProfile/UpdateAccountInfo/UpdateAccountInfo";
import Register from "../Pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        // loader: () => {
        //   return fetch(`https://n-sage-ten.vercel.app/services/`);
        // },
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
        path: "/updateProfile",
        element: <UpdateAccountInfo />,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
