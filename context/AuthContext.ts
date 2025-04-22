import { createContext } from "react";
import { UserType } from "../types/types";

interface AuthContextTypes {
  user: UserType | undefined;
  setUser: (user: UserType | undefined) => void;
}

export const AuthContext = createContext<AuthContextTypes>({
  user: undefined,
  setUser: () => {},
});
