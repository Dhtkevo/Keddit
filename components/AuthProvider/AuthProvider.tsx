import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserType } from "../../types/types";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
