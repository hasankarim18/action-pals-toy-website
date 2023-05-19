import { useEffect } from "react";

    
    
    const useTitle = ({title}) => {
        useEffect(() => {
            document.title = `${title} | Action Pals`
        }, [title])
        
    };
    
    export default useTitle;