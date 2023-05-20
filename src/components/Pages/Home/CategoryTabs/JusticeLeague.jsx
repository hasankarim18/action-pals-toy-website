import { useContext} from "react";
import { DataContext } from "../../../Providers/DataProvider";
import { baseUrl } from "../../../loaders/loaders";

import useLoadCatLatest from "./useLoadCatLatest";
import ShowLatestCatCard from "./ShowLatestCatCard";


const JusticeLeague = () => {

        const {
     justiceLatest,
      setJusticeLatest,
      loadingJusticeLeague,
      setloadingJusticeLeague,
        } = useContext(DataContext)

       const cat_name = "justice_league";

      useLoadCatLatest(
        cat_name,
        baseUrl,
        setJusticeLatest,
        setloadingJusticeLeague
      );

      if(loadingJusticeLeague){
        return "Loading"
      }else {
            return (
            <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8" >
                {
                    justiceLatest.data.data.map(item => {
                        return <ShowLatestCatCard  key={item._id} name={item.name} id={item._id} rating={item.rating} img={item.picture} price={item.price} />
                    })
                }
            </div>
            )
      }

   
};

export default JusticeLeague;