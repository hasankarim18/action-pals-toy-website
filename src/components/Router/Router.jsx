

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blog/Blogs";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import EditToy from "../Pages/EditToy/EditToy";
import { baseUrl } from "../loaders/loaders";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
        path: "user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: `/edit-toy/:id`,
        element: (
          <PrivateRoute>
            {" "}
            <EditToy />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseUrl}/toy/${params.id}`),
      },
    ],
  },
]);

export default router;