import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../loaders/loaders";

export const DataContext = createContext()

const DataProvider = ({children}) => {
   
    const [loadLatest, setLoadLatest] = useState([])
    const [loadLatestLoading, setLoadLatestLoading] = useState(true)
    const [loadMarveLatest, setLoadMarveLatest] = useState([])
    const [loadingMarvel, setLoadingMarvel] = useState(true)
    const [justiceLatest, setJusticeLatest] = useState([])
    const [loadingJusticeLeague, setloadingJusticeLeague] = useState(true)
    // start wars 
    const [starWars, setStarWars] = useState([])
    const [loadingSartWars, setLoadingSartWars] = useState(true)
    // trans former 
   const [transformerCatLatest, setTransformerCatLatest] = useState([])
   const [loadingTransformerCateLatest, setLoadingTransformerCateLatest] = useState(true)
    

    useEffect(() => {
        axios
          .get(`${baseUrl}/toys/latest`)
          .then((data) => {
            setLoadLatest(data);
            setLoadLatestLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });

    }, [])

   
    

    

    const data = {
      loadLatest,
      loadLatestLoading,
      loadMarveLatest,
      loadingMarvel,
      setLoadMarveLatest,
      setLoadingMarvel,
      justiceLatest,
      setJusticeLatest,
      loadingJusticeLeague,
      setloadingJusticeLeague,
      starWars,
      setStarWars,
      loadingSartWars,
      setLoadingSartWars,
      transformerCatLatest,
      setTransformerCatLatest,
      loadingTransformerCateLatest,
      setLoadingTransformerCateLatest,
    };


    return (
       <DataContext.Provider value={data}> 
            {children}
       </DataContext.Provider>
    );
};

export default DataProvider;

