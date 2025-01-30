import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // State for gener
  const [genre, setGenre] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://frill-shard-licorice.glitch.me/movies/?genre=${genre}`

          //https://frill-shard-licorice.glitch.me/movies?genre=Crime
        );
        setMovies(response.data.movies);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "An error occurred while fetching data."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [genre]);
  // gener is dependent variable

  // Dynamic Routing for each movie
  const handleViewMore = (id) => {
    navigate(`/movies/${id}`);
  };
  //delete the movie
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://frill-shard-licorice.glitch.me/movies/${id}`
      );
      setMovies(movies.filter((movie) => movie.id !== id));
      //setMovies(response.data.movies);
      console.log(response);
    } catch (error) {
      alert("failed to delete", error);
    }
  };

  return (
    <div
      className="movies-container"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <h1>Movie Explorer</h1>
      <button onClick={() => navigate("/add-movie")}>Add Movie</button>

      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {!loading && !error && movies.length === 0 && (
        <h2>No movies available.</h2>
      )}
      {/* Filter by gener */}
      <div>
        <select
          className="filter-section"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <div
        className="movies-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.releaseDate}
            </p>
            <div className="btn">
              <button className="edit-btn">Edit</button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </button>
              <button
                className="view-btn"
                onClick={() => handleViewMore(movie.id)}
              >
                View More..
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
