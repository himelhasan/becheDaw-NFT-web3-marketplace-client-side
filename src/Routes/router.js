import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
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
          return fetch(`https://bechedaw-server.vercel.app/category/`);
        },
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(`https://bechedaw-server.vercel.app/category/${params.id}`);
        },
        element: (
          <PrivateRouter>
            <CategoryPage />{" "}
          </PrivateRouter>
        ),
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
        element: (
          <PrivateRouter>
            <Collections />
          </PrivateRouter>
        ),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [{ path: "/dashboard", element: <UpdateAccountInfo></UpdateAccountInfo> }],
  },
]);

export default routes;
