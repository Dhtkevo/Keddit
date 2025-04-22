import { createContext } from "react";
import { User } from "../types/types";

interface AuthContextTypes {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const AuthContext = createContext<AuthContextTypes>({
  user: undefined,
  setUser: () => {},
});
