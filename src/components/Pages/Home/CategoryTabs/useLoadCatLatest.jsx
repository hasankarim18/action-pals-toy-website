import axios from "axios";
import { useEffect } from "react";





const useLoadCatLatest = ( cat_name, baseUrl,  setData, setLoading, setLoadError) => {

    useEffect(() => {
        axios
          .get(`${baseUrl}/category?name=${cat_name}`)
          .then((data) => {
           
            setData(data);
            setLoading(false);
          })
          .catch((error) => {
            setLoadError(error)
          });
    }, [setData, setLoading, cat_name, baseUrl, setLoadError])
    

    
};

export default useLoadCatLatest;