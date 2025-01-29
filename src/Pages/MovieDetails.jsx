import "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  // in this id passing from routing handleview more button
  const { id } = useParams();
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://frill-shard-licorice.glitch.me/movies/${id}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchMovie();
  }, [id]);
  // whenever id changes useeffect change

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <h1>{movies.title}</h1>
      <img
        src={movies.poster}
        alt={movies.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>
        <strong>Genre:</strong> {movies.genre}
      </p>
      <p>
        <strong>Release Date:</strong> {movies.releaseDate}
      </p>
    </div>
  );
};

export default MovieDetails;
