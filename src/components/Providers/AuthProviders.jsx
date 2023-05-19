import { createContext, useEffect, useState } from "react";
 import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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


    // sign in with google account 

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = ()=> {
      return signInWithPopup(auth, googleProvider);
    }


    // create user with email and password 

    const createUser = (email, password)=> {
    return  createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUserInfo = (registeredUser, name,photo) => {
    return  updateProfile(registeredUser, {
        displayName: name,
        photoURL:photo,
      })
        
    };







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
      loginWithGoogle,
      createUser,
      updateUserInfo,
    };

    return (
        <AuthContext.Provider value={userInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;