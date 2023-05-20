import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import Gallery from "./Gallery/Gallery";


const Home = () => {

    useTitle("Home")

    return (
      <div>
        <Banner />
        <div className="mt-4">
          <CategoryTabs />
        </div>
        <div className="my-8 mt-20">
          <h3 className="text-3xl text-center mb-8 ">Hegiest rated products</h3>
          <hr className="mb-8"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center">
              <p>
                Introducing our top-rated product - a game-changer in quality,
                performance, and durability. With cutting-edge technology and
                sleek design, it sets new industry standards. Customers love its
                reliability, versatility, and user-friendly interface. Join
                satisfied customers and elevate your experience with our
                best-selling product today.
              </p>
            </div>
            <div>
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;