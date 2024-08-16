import React, { createContext, useContext, useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth}from "../Firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

// 1. Create export AuthContext
export const AuthContext = createContext();

// 2. Create AuthContextProvider that takes in children
export const AuthContextProvider =({children})=>{

// 3. Define the state and setState
// const [name, setName]= useState("Sherlyne");
const [user, setUser]=useState();

//cont for sign up
const signup=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
};

const login= (email,password)=>{
  return signInWithEmailAndPassword
(auth,email,password)
}

// 4. Return AuthContext.Provider that takes in name and setName
  return(
<AuthContext.Provider value={{name, setName}}>{children} </AuthContext.Provider>
  );
};

// 5. Export function to access the AuthContext
export const userAuthContext =()=>{
  return useContext(AuthContext);
};



