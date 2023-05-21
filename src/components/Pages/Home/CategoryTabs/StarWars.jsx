import { useContext } from "react";
import { DataContext } from "../../../Providers/DataProvider";
import useLoadCatLatest from "./useLoadCatLatest";
import { baseUrl } from "../../../loaders/loaders";
import ShowLatestCatCard from "./ShowLatestCatCard";
import Spinner from "../../../utils/Spinner";


const StarWars = () => {

    const {
      starWars,
      setStarWars,
      loadingSartWars,
      setLoadingSartWars,
      starWarsError,
      setStarWarsError,
    } = useContext(DataContext);

   const cat_name = "star_war";

   useLoadCatLatest(
     cat_name,
     baseUrl,
     setStarWars,
     setLoadingSartWars,
     setStarWarsError
   );

   if (loadingSartWars) {
     return (
       <div>
         <div>
           <Spinner />
         </div>
         {starWarsError !== null && (
           <h3 className="text-3xl text-rose-400">{starWarsError.message}</h3>
         )}
       </div>
     );
   } else {
     return (
       <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
         {starWars.data.data.length === 0 && (
           <h3 className="text-3xl">No data found</h3>
         )}
         {starWars.data.data.map((item) => {
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

export default StarWars;