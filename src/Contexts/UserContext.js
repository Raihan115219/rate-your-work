import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
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

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // user creattions
  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user lgoin
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user ke log out kore dibo
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   user profile update funtons
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // google login

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //   user manged who is loged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
      setUser(presentUser);
      setLoading(false);
      console.log("stateChange user", presentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   values....
  const authInfo = {
    userCreate,
    userLogin,
    user,
    setUser,
    loading,
    setLoading,
    userSignOut,
    updateUserProfile,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
