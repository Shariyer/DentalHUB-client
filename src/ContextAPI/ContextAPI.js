/** @format */

import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FireBase/FireBase.config";
export const authContext = createContext();
const auth = getAuth(app);
// creating google provider
const googleProvider = new GoogleAuthProvider();
const ContextAPI = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // creating new user with Email and password
  const CreatingUserWithEP = (email, password) => {
    setLoading(true);
    // here we gonna load the loading button
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login with Email and password
  const LoginWithEP = (email, password) => {
    setLoading(true);
    //we gonna load the loading button
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    setLoading(true);

    // here we gonna load the loading button
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    return signOut(auth);
  };

  // Logging in with google provider\
  const GoogleLogin = () => {
    setLoading(true);
    if (loading) {
      return (
        <div className="flex justify-center items-center">
          <button className="btn btn-square loading p-10"></button>
        </div>
      );
    }
    return signInWithPopup(auth, googleProvider);
  };

  const UpdateUserProfile = (ProfileInfo) => {
    return updateProfile(auth.currentUser, ProfileInfo);
  };
  // const handleDrawerClose = () => {
  //   return handleDrawerClose();
  // };

  // setting observer
  // observer useEffect er moddhe use korte hoy
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      // useEffect a return korte hoy ekta arrow function r shekhane unsubscribe call kore dite hoy
      unsubscribe();
    };
  }, []);
  const info = {
    user,
    loading,
    CreatingUserWithEP,
    LoginWithEP,
    LogOut,
    GoogleLogin,
    UpdateUserProfile,
  };
  return <authContext.Provider value={info}>{children}</authContext.Provider>;
};

export default ContextAPI;
