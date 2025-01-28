import "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./Components/PrivateRouter";
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
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
