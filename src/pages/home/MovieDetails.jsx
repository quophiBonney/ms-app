import React, {useEffect, useState} from "react";
import {HiCollection, HiPlay, HiStar} from "react-icons/hi";
import {Link, useParams} from "react-router-dom";
import Modal from "react-modal";
function MovieDetails() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=26bde3c855c8177c9bfb473daabd4421`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container-fluid movieDetails mt-5" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3 px-3">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid img-responsive"
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 mb-3 text-light px-3">
            <div className="row">
              <div className="col-sm-4">
                <p>Release Date:{movie.release_date}</p>
              </div>
              <div className="col-sm-4">
                <p className="">Original Title({movie.original_title})</p>
              </div>
              <div className="col-sm-4">
                <p className="ms-auto">Language({movie.original_language})</p>
              </div>
            </div>
            <h2 style={{fontFamily: "Archivo Black, sans-serif"}}>
              {movie.title}
            </h2>
            <p>{movie.overview}</p>
            <div className="row">
              <div className="col-sm-2">
                <Link
                  to="/"
                  className="btn btn-light rounded-pill text-decoration-none"
                >
                  <HiStar /> Rate It
                </Link>
              </div>
              <div className="col-sm-3">
                <p
                  className="btn btn-light rounded-pill text-decoration-none"
                  onClick={openModal}
                >
                  <HiPlay /> Watch Trailer
                </p>
              </div>
              <div className="col-sm-3">
                <Link
                  to="/"
                  className="btn btn-light rounded-pill text-decoration-none"
                >
                  <HiCollection /> Add To Favorites
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Trailer Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              maxWidth: "800px",
              margin: "auto",
              padding: "20px",
            },
          }}
        >
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/movie/${id}`}
            frameBorder="0"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
          <button className="btn btn-danger" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default MovieDetails;
