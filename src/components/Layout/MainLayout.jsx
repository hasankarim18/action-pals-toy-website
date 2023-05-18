import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const MainLayout = () => {
    return (
      <div className="container mx-auto">
        <div className="ml-2 mr-2 md:ml-2 md:mr-2">
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default MainLayout;