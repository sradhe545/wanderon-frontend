import { createContext, useContext } from "react";
import Cookies from "universal-cookie";
import { TOKEN } from "../utils/constant";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  
  const setAuthToken = (token) => cookies.set(TOKEN, token);
  const removeAuthToken = () => cookies.remove(TOKEN, { path: "/" });
  const getAuthToken = () => cookies.get(TOKEN);

  return (
    <AuthContext.Provider
      value={{ setAuthToken, removeAuthToken, getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
