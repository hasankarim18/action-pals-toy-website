import { createContext, useEffect, useState } from "react";
 import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../../firebase.config";




export const AuthContext = createContext()


const AuthProviders = ({children}) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [user, setUser] = useState(null)

    const auth = getAuth(app);

     useEffect(() => {
       const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
         //   console.log("auth state change", currentUser);
         setUser(currentUser);
         setIsLoggingIn(false);
       });
       // stop observing when unmounty
       return () => {
         unsubscirbe();
       };
     }, [auth]);

   



    // login with email password 
    const LogInWithEmailPassword = (email, password)=> {
        setIsLoggingIn(true);
          return  signInWithEmailAndPassword(auth, email, password)     
    }








    /**
     * Logout 
     */
    const logout = ()=> {
       return signOut(auth)         
    }

    const userInfo = {
      user,
      LogInWithEmailPassword,
      setUser,
      logout,
      isLoggingIn,
    };

    return (
        <AuthContext.Provider value={userInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;