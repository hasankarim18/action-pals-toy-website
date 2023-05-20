import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import CategoryTabs from "./CategoryTabs/CategoryTabs";


const Home = () => {

    useTitle("Home")

    return (
        <div>
            <Banner />
            <div className="mt-4">
                <CategoryTabs />
            </div>
        </div>
    );
};

export default Home;