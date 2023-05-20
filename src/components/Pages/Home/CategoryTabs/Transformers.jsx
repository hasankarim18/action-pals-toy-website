import { useContext } from "react";
import { DataContext } from "../../../Providers/DataProvider";
import useLoadCatLatest from "./useLoadCatLatest";
import { baseUrl } from "../../../loaders/loaders";
import ShowLatestCatCard from "./ShowLatestCatCard";


const Transformers = () => {

    const {
         transformerCatLatest,
      setTransformerCatLatest,
      loadingTransformerCateLatest,
      setLoadingTransformerCateLatest,
    } = useContext(DataContext)

    const cat_name = "transformers";

    useLoadCatLatest(
      cat_name,
      baseUrl,
      setTransformerCatLatest,
      setLoadingTransformerCateLatest
    );

    if (loadingTransformerCateLatest) {
      return "Loading";
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
          {transformerCatLatest.data.data.map((item) => {
            return (
              <ShowLatestCatCard
                key={item._id}
                name={item.name}
                id={item._id}
                rating={item.rating}
                img={item.picture}
                price={item.price}
              />
            );
          })}
        </div>
      );
    }
};

export default Transformers;