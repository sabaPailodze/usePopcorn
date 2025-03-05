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
    <div className="bg-[#2b3035] w-[80vh] rounded-[14px] overflow-scroll relative">
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
            <div className="py-9 sm:py-12 px-0 sm:px-11 rounded-[0.9rem] bg-[#343a40] shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.2)] flex flex-col gap-3 w-full">
              <h2 className="uppercase text-[16px] font-bold md:text-[18px] sm:text-[20px] text-center md:text-start">
                Movies you watched
              </h2>
              <div className="flex flex-row items-center justify-center md:justify-start gap-6 text-[14px] xs:text-[16px] font-semibold">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10">
                  <p className="flex items-center justify-center gap-2">
                    <span>#️⃣</span>
                    <span className="text-center flex gap-2">
                      <span>{watched.length}</span>
                      <span>movies</span>
                    </span>
                  </p>
                  <p className="flex justify-center gap-2">
                    <span>⏳</span>
                    <span className="flex gap-2">
                      <span>{avgRuntime.toFixed(2)}</span>
                      <span> min</span>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10">
                  <p className="flex justify-center gap-2">
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-center gap-2">
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* <ul className="list"> */}
            <ul className="list-none p-2.5 overflow-scroll">
              {watched.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="relative flex flex-col xmd:flex-row items-center gap-2 xmd:gap-6 p-4 border-b border-[#343a40] cursor-pointer transition-all duration-300 md:hover:bg-[#343a40]"
                >
                  <img
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                    className="w-28"
                  />
                  <div className="flex-1">
                    <h3 className="text-center md:w-[90%] sm:text-start text-[16px] md:text-[18px]">
                      {movie.title}
                    </h3>
                    <div className="flex justify-center xmd:justify-start gap-4 sm:gap-6 font-normal">
                      <p className="flex items-center gap-1 text-[16px]">
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p className="flex items-center gap-1 text-[16px]">
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p className="flex items-center gap-1 text-[16px]">
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </div>
                  <button
                    className="absolute right-2 md:right-10 bottom-18 h-7 md:h-8 aspect-square rounded-full border-none bg-[#fa5252] text-[#212529] text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-[#e03131]"
                    onClick={() => deleteWatched(movie.imdbID)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </>
        ))}
    </div>
  );
};

export default WatchedMovies;
