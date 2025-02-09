import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import MovieDetails from "../../Atoms/MovieDetails/MovieDetails";

const WatchedMovies = ({
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  selectedId,
  handleCloseMovie,
  KEY,
}) => {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div className="bg-[#2b3035] w-[42rem] max-w-[42rem] rounded-[14px] overflow-scroll relative">
      <Button isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 &&
        (selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            handleCloseMovie={handleCloseMovie}
            KEY={KEY}
          />
        ) : (
          <>
            <div className="summary">
              <h2>Movies you watched</h2>
              <div>
                <p>
                  <span>#️⃣</span>
                  <span>{watched.length} movies</span>
                </p>
                <p>
                  <span>⭐️</span>
                  <span>{avgImdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{avgUserRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{avgRuntime} min</span>
                </p>
              </div>
            </div>
            <ul className="list">
              {watched.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>⭐️</span>
                      <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{movie.userRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ))}
    </div>
  );
};

export default WatchedMovies;
