import "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./Components/PrivateRouter";
import MovieDetails from "./Pages/MovieDetails";
import AddMovie from "./Pages/AddMovie";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/movies"
          element={
            <PrivateRouter>
              <Movies />
            </PrivateRouter>
          }
        ></Route>
        {/* Route for dynamic routing each movie */}
        <Route
          path="/movies/:id"
          element={
            <PrivateRouter>
              <MovieDetails />
            </PrivateRouter>
          }
        ></Route>
        {/* Route for add movie */}
        <Route
          path="/add-movie"
          element={
            <PrivateRouter>
              <AddMovie />
            </PrivateRouter>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
