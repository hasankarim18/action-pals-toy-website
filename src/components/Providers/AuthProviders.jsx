import { createContext } from "react";


export const AuthContext = createContext()


const AuthProviders = ({children}) => {

    const user = null

    const userInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={userInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;