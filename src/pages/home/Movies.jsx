import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {HiPlay} from "react-icons/hi";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
const Movies = forwardRef((props, ref) => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const moviesRef = useRef(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=26bde3c855c8177c9bfb473daabd4421"
      );
      const data = await response.json();
      const moviesWithImages = data.results.map(movie => ({
        ...movie,
        fullPosterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
      setMovies(moviesWithImages);
      setSearchResults(moviesWithImages);
    } catch (error) {
      console.log(error);
    }
  };

  const performSearch = searchTerm => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

  // Expose performSearch method to the parent component using useImperativeHandle
  useImperativeHandle(ref, () => ({
    performSearch: performSearch,
  }));

  return (
    <Container fluid style={{backgroundColor: "#000"}}>
      <Container>
        <div className="row justify-content-center">
          {searchResults.map(movie => (
            <div
              key={movie.id}
              className="col-sm-6 col-md-4 col-lg-4 mb-3 mt-3 px-3"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="text-light">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top img-fluid img-responsive"
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "20px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title mt-3 mb-3">{movie.title}</h5>
                  <div className="d-flex"></div>
                  <div className="d-flex">
                    <Link
                      to={`/movie/${movie.id}`}
                      className="btn btn-light text-dark"
                    >
                      <HiPlay className="m-2" /> Stream Video
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
});

export default Movies;
