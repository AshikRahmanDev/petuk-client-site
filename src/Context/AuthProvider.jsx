import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "ashik" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
