import "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
