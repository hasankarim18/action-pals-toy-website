import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../loaders/loaders";

export const DataContext = createContext()

const DataProvider = ({children}) => {
   
    const [loadLatest, setLoadLatest] = useState([])
    const [loadLatestLoading, setLoadLatestLoading] = useState(true)

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
        loadLatestLoading
    }


    return (
       <DataContext.Provider value={data}> 
            {children}
       </DataContext.Provider>
    );
};

export default DataProvider;

