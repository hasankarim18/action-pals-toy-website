import useTitle from "../../Hooks/useTitle";
import HomePageHeading from "../../utils/HomePageHeading/HomePageHeading";
import Banner from "./Banner/Banner";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import Faq from "./Faq/Faq";
import Gallery from "./Gallery/Gallery";
import PartNers from "./PartNers/PartNers";


const Home = () => {

    useTitle("Home")

    return (
      <div>
        <Banner />
        <div className="mt-12 ">
          <CategoryTabs />
        </div>
        <div className="mt-20">
          <HomePageHeading>top rated product Gallery</HomePageHeading>
          <Gallery />
        </div>
        <div className="mt-20">
          <HomePageHeading>Frequently Asked Questions</HomePageHeading>
          <Faq />
        </div>
        <div className="mt-20">
          <HomePageHeading>Our Trusted Wholesale Partners</HomePageHeading>
          <PartNers />
        </div>
      </div>
    );
};

export default Home;