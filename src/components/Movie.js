import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { useNavigate } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`, {
      state: { year, title, summary, poster, genres },
    });
  };

  return (
    <div className="movie" onClick={handleClick}>
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
