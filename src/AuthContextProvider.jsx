import "react";
import { AuthContext } from "./Create.js";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const login = () => {
    //set authentication true
    // set the token
    // navigate to home
  };
  const logout = () => {
    //set authentication true
    // set the token
    // navigate to home
  };
  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
