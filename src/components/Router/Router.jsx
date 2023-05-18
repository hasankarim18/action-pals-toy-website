

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blog/Blogs";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error />,
    children:[
        {
            path:"/all-toys",
            element:<AllToys />
        },
        {
            path:"/my-toys",
            element:<MyToys />
        },
        {
            path:"/add-toy",
            element:<AddToy />
        },
        {
            path:'/blogs',
            element:<Blogs />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/register",
            element:<Register />
        }
    ]

  },
]);

export default router;