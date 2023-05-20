import axios from "axios";
import { useEffect } from "react";





const useLoadCatLatest = ( cat_name, baseUrl,  setData, setLoading) => {

    useEffect(() => {
        axios
          .get(`${baseUrl}/category?name=${cat_name}`)
          .then((data) => {
            console.log(data);
            setData(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
    }, [setData, setLoading, cat_name, baseUrl])
    

    
};

export default useLoadCatLatest;