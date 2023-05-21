import React from 'react'
import ReactDOM from 'react-dom/client'
 import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './components/Router/Router.jsx';
  import { ToastContainer} from "react-toastify";
import AuthProviders from './components/Providers/AuthProviders';
import DataProvider from './components/Providers/DataProvider';


import "aos/dist/aos.css"; // You can also use <link> for styles
// ..


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <DataProvider>
      <AuthProviders>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProviders>
    </DataProvider>
  </React.Fragment>
);
