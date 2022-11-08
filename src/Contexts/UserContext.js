import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
