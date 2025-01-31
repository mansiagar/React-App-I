import "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const intialdata = {
  title: "",
  poster: "",
  genre: "",
  releaseDate: "",
  description: "",
};

const EditMovie = () => {
  const { id } = useParams();
  const [formdata, setFormdata] = useState(intialdata);
  const navigate = useNavigate();

  // pre fill the input fields
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://frill-shard-licorice.glitch.me/movies/${id}`
        );
        setFormdata(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleEditMovie = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      await axios({
        url: `https://frill-shard-licorice.glitch.me/movies/${id}`,
        method: "PUT",
        data: formdata,
      });
      alert("movie successfully edited");
      navigate("/movies");
    } catch (error) {
      console.log(error);
      alert("movie not added");
    }
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <form onSubmit={handleEditMovie}>
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

export default EditMovie;
