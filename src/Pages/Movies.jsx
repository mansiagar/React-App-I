// import axios from "axios";
// import "react";
// import { useEffect, useState } from "react";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [Loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchMovies = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `https://frill-shard-licorice.glitch.me/movies`
//         );
//         setMovies(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.response.data.message);
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//   }, []);
//   console.log(movies);
//   return (
//     <div
//       className="movies-container"
//       style={{ padding: "20px", textAlign: "center" }}
//     >
//       <h1>Movie Explorer</h1>

//       {Loading && <h2>Loading...</h2>}
//       {error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {!Loading && !error && movies.length === 0 && (
//         <h2>No movies available.</h2>
//       )}

//       <div
//         className="movies-list"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "20px",
//           marginTop: "20px",
//         }}
//       >
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "10px",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={movie.poster}
//               alt={movie.title}
//               style={{ width: "100%", borderRadius: "10px" }}
//             />
//             <h3>{movie.title}</h3>
//             <p>
//               <strong>Genre:</strong> {movie.genre}
//             </p>
//             <p>
//               <strong>Release Date:</strong> {movie.releaseDate}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movies;

import axios from "axios";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://frill-shard-licorice.glitch.me/movies`
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
  }, []);

  return (
    <div
      className="movies-container"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <h1>Movie Explorer</h1>

      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {!loading && !error && movies.length === 0 && (
        <h2>No movies available.</h2>
      )}

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
