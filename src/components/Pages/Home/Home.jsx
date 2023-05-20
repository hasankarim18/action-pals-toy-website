import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";


const Home = () => {

    useTitle("Home")

    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;