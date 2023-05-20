
import { useContext } from "react";
import { baseUrl } from "../../../loaders/loaders";
import { DataContext } from "../../../Providers/DataProvider";
import useLoadCatLatest from "./useLoadCatLatest";
import ShowLatestCatCard from "./ShowLatestCatCard";


const Marvel = () => {
    const {
      loadMarveLatest,
      loadingMarvel,
      setLoadMarveLatest,
      setLoadingMarvel,
    } = useContext(DataContext)   

    const cat_name = 'marvel'


    useLoadCatLatest(cat_name, baseUrl, setLoadMarveLatest, setLoadingMarvel)




    
    if (loadingMarvel){
        return "Loading...."
    }else { 
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
            {loadMarveLatest.data.data.map((item) => {
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

export default Marvel;