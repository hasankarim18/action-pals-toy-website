import { useContext } from "react";
import { DataContext } from "../../../Providers/DataProvider";
import useLoadCatLatest from "./useLoadCatLatest";
import { baseUrl } from "../../../loaders/loaders";
import ShowLatestCatCard from "./ShowLatestCatCard";
import Spinner from "../../../utils/Spinner";


const Transformers = () => {

    const {
      transformerCatLatest,
      setTransformerCatLatest,
      loadingTransformerCateLatest,
      setLoadingTransformerCateLatest,
      tranformerError,
      setTranformerError,
    } = useContext(DataContext);

    const cat_name = "transformers";

    useLoadCatLatest(
      cat_name,
      baseUrl,
      setTransformerCatLatest,
      setLoadingTransformerCateLatest,
      setTranformerError
    );

    if (loadingTransformerCateLatest) {
      return (
        <div>
          <div>
            <Spinner />
          </div>
          {tranformerError !== null && (
            <h3 className="text-3xl text-rose-400">{tranformerError.message}</h3>
          )}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
          {transformerCatLatest.data.data.length === 0 && (
            <h3 className="text-3xl">No data found</h3>
          )}
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