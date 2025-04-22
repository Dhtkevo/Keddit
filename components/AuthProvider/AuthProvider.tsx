import { ReactNode, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserType } from "../../types/types";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
