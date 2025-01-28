import "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Create.js";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {isAuthenticated ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
      <Link></Link>
    </nav>
  );
};

export default Navbar;
