import React, { createContext } from "react";
export const AuthContext = createContext();

function UserContext({ Children }) {
  const user = { name: "Raihan" };
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
}

export default UserContext;
