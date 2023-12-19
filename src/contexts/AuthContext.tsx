import { api } from "@/services/api";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext({} as any);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const singIn = (token: string) => {
    setToken(token);
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      const tokenSave = window.localStorage.getItem("token") || null;

      if (!tokenSave) return;

      setToken(tokenSave);
    }
  }, []);

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    window.localStorage.setItem("token", token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ singIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};
