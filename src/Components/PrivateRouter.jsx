import "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Create";
import { Navigate, useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    console.log(location);
  }, [location]);

  if (!isAuthenticated) {
    //Navigate me state attribute purani state ko yaad rkhta hai
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRouter;
