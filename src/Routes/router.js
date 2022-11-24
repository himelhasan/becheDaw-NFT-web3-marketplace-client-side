import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import UpdateAccountInfo from "../Pages/MyProfile/UpdateAccountInfo/UpdateAccountInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch(`https://n-sage-ten.vercel.app/services/`);
        },
        element: <Home></Home>,
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
