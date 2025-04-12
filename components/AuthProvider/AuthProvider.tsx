import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
