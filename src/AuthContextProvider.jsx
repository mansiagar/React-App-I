import "react";
import { AuthContext } from "./Create.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  //   const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem("token") ? true : false;
  });
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  // useEffect for getting token in console
  useEffect(() => {
    console.log(token);
  }, [token]);
  const login = (authToken) => {
    setToken(authToken);
    localStorage.setItem("token", authToken);
    setAuthenticated(true);
    navigate("/");

    //set authentication true
    // set the token
    // navigate to home
  };
  const logout = () => {
    setToken(null);
    localStorage.setItem("token", null);
    setAuthenticated(false);
    navigate("/login");
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
