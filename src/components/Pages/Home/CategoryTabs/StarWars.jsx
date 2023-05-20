import { useContext } from "react";
import { DataContext } from "../../../Providers/DataProvider";
import useLoadCatLatest from "./useLoadCatLatest";
import { baseUrl } from "../../../loaders/loaders";
import ShowLatestCatCard from "./ShowLatestCatCard";


const StarWars = () => {

    const {
     starWars,
      setStarWars,
      loadingSartWars,
      setLoadingSartWars,
    } = useContext(DataContext)

   const cat_name = "star_war";

   useLoadCatLatest(cat_name, baseUrl, setStarWars, setLoadingSartWars);

   if (loadingSartWars) {
     return "Loading";
   } else {
     return (
       <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
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