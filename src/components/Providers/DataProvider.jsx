import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../loaders/loaders";

export const DataContext = createContext()

const DataProvider = ({children}) => {
   
    const [loadLatest, setLoadLatest] = useState([])
    const [loadLatestLoading, setLoadLatestLoading] = useState(true)
    const [loadLatestError, setLoadLatestError] = useState(null)
    /********************* */
    const [loadMarveLatest, setLoadMarveLatest] = useState([])
    const [loadingMarvel, setLoadingMarvel] = useState(true)
    const [loadMarvelError, setLoadMarvelError] = useState(null)
  /********************************** */
    const [justiceLatest, setJusticeLatest] = useState([])
    const [loadingJusticeLeague, setloadingJusticeLeague] = useState(true)
    const [loadJusticeError, setLoadJusticeError] = useState(null)
    // start wars 
    const [starWars, setStarWars] = useState([])
    const [loadingSartWars, setLoadingSartWars] = useState(true)
    const [starWarsError, setStarWarsError] = useState(null)
    // trans former 
   const [transformerCatLatest, setTransformerCatLatest] = useState([])
   const [loadingTransformerCateLatest, setLoadingTransformerCateLatest] = useState(true)
   const [tranformerError, setTranformerError] = useState(null)
    

    useEffect(() => {
        axios
          .get(`${baseUrl}/toys/latest`)
          .then((data) => {
            setLoadLatest(data);
            setLoadLatestLoading(false);
          })
          .catch((error) => {
          //  console.log(error);
           // setLoadLatestLoading(false);
            setLoadLatestError(error);
          });

    }, [])

   
    

    

    const data = {
      loadLatest,
      loadLatestLoading,
      loadLatestError,
      /********* marvel */
      loadMarveLatest,
      loadingMarvel,
      setLoadMarveLatest,
      setLoadingMarvel,
      loadMarvelError,
      setLoadMarvelError,
      /********* justice leagure */
      justiceLatest,
      setJusticeLatest,
      loadingJusticeLeague,
      setloadingJusticeLeague,
      loadJusticeError,
      setLoadJusticeError,
      /********* star war */
      starWars,
      setStarWars,
      loadingSartWars,
      setLoadingSartWars,
      starWarsError,
      setStarWarsError,
      /********* transformer */
      transformerCatLatest,
      setTransformerCatLatest,
      loadingTransformerCateLatest,
      setLoadingTransformerCateLatest,
      tranformerError,
      setTranformerError,
    };


    return (
       <DataContext.Provider value={data}> 
            {children}
       </DataContext.Provider>
    );
};

export default DataProvider;

