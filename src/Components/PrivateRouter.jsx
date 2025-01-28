import "react";
import { useContext } from "react";
import { AuthContext } from "../Create";
import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRouter;
