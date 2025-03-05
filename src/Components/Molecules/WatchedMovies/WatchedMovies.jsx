import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import MovieDetails from "../../Atoms/MovieDetails/MovieDetails";

const WatchedMovies = ({
  watched,
  setWatched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  selectedId,
  handleCloseMovie,
  KEY,
}) => {
  const [isOpen2, setIsOpen2] = useState(true);
  function addWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function deleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  return (
    <div className="bg-[#2b3035] w-[60vh] rounded-[14px] overflow-scroll relative">
      <Button isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 &&
        (selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            handleCloseMovie={handleCloseMovie}
            KEY={KEY}
            addWatched={addWatched}
            watched={watched}
          />
        ) : (
          <>
            <div className="py-12 px-0 sm:px-11 rounded-[0.9rem] bg-[#343a40] shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.2)] flex flex-col gap-3 w-full">
              <h2 className="uppercase text-[18px] sm:text-[20px] text-center md:text-start">
                Movies you watched
              </h2>
              <div className="flex flex-col xs:flex-row items-center justify-center md:justify-start gap-6 text-[1.6rem] font-semibold">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10">
                  <p className="flex items-center justify-center gap-2">
                    <span>#️⃣</span>
                    <span className="text-center flex gap-2">
                      <span>{watched.length}</span>
                      <span>movies</span>
                    </span>
                  </p>
                  <p className="flex justify-center gap-2">
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10">
                  <p className="flex justify-center gap-2">
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-center gap-2">
                    <span>⏳</span>
                    <span className="flex gap-2">
                      <span>{avgRuntime.toFixed(2)}</span>
                      <span> min</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ul className="list">
              {watched.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.poster} alt={`${movie.title} poster`} />
                  <h3>{movie.title}</h3>
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
                    <button
                      className="absolute right-10 h-7 aspect-square rounded-full border-none bg-[#fa5252] text-[#212529] text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-[#e03131]"
                      onClick={() => deleteWatched(movie.imdbID)}
                    >
                      X
                    </button>
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
