import "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const intialdata = {
  title: "",
  poster: "",
  genre: "",
  releaseDate: "",
  description: "",
};

const AddMovie = () => {
  const [formdata, setFormdata] = useState(intialdata);
  const navigate = useNavigate();
  const handleAddMovie = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      await axios.post(
        "https://frill-shard-licorice.glitch.me/movies",
        formdata
      );
      navigate("/movies");
    } catch (error) {
      console.log(error);
      alert("movie not added");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          value={formdata.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Poster url"
          name="poster"
          value={formdata.poster}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Enter Release date"
          name="releaseDate"
          value={formdata.releaseDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter genre"
          name="genre"
          value={formdata.genre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          value={formdata.description}
          onChange={handleChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
