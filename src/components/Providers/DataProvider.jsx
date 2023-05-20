import { createContext, useState } from "react";

export const DataContext = createContext()

const DataProvider = ({children}) => {
    // const [latestToy, setLatestToy] = useState([])

    



    const data = {}


    return (
       <DataContext.Provider value={data}> 
            {children}
       </DataContext.Provider>
    );
};

export default DataProvider;