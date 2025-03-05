import React, { useState, useEffect } from "react";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";
import { div } from "motion/react-m";

const MovieDetails = ({
  selectedId,
  handleCloseMovie,
  KEY,
  addWatched,
  watched,
}) => {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          handleCloseMovie();
        }
      }
      document.addEventListener("keydown", callback);
      return function cleanUp() {
        document.removeEventListener("keydown", callback);
      };
    },
    [handleCloseMovie]
  );

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  function handleAdd() {
    const newWatchedMovies = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    addWatched(newWatchedMovies);
    handleCloseMovie();
  }
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const request = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const response = await request.json();
      console.log(response);
      setMovie(response);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      document.title = "UsePopcorn 🍿";
    };
  }, [title]);

  return (
    <div className="leading-[1.4] text-[1.4rem]">
      {isLoading ? (
        <div className="flex items-center justify-center h-[16.5vh]">
          <Loader />
        </div>
      ) : (
        <>
          <header className="flex flex-col sm:flex-row">
            <button
              onClick={handleCloseMovie}
              className="absolute top-[0.6rem] left-[0.6rem] h-[3.2rem] aspect-square rounded-full border-none bg-white text-[#2b3035] shadow-[0_8px_20px_rgba(0,0,0,0.8)] font-sans text-[2.2rem] font-bold cursor-pointer z-[999] flex items-center justify-center"
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie} movie`}
              className="w-full max-sm:h-[30vh] sm:w-[40%]"
            />
            <div className="w-full items-center xs:text-start sm:items-start justify-center py-6 md:py-0 px-2 sm:px-8 bg-[#343a40] flex flex-col gap-5">
              <h2 className="text-[18px] text-center xs:text-[22px] mb-[0.4rem] leading-[1.1]">
                {title}
              </h2>
              <p className="flex items-center text-center xs:text-start gap-3">
                {released} &bull; {runtime}
              </p>
              <p className="flex items-center text-center xs:text-start gap-3">
                {genre}
              </p>
              <p className="flex items-center text-center xs:text-start gap-3">
                <span>⭐️</span>
                {imdbRating}
                IMDB Rating
              </p>
            </div>
          </header>
          <section className="p-8 lg:p-14 flex flex-col gap-[1.6rem]">
            <div className="bg-[#343a40] rounded-[0.9rem] p-[2rem_2.4rem] mb-3 font-semibold flex flex-col gap-8">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    setUserRating={setUserRating}
                    userRating={userRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-[#6741d9] text-[#dee2e6] border-none rounded-[10rem] text-[1.4rem] p-4 font-bold cursor-pointer transition-all duration-300 hover:bg-[#7950f2]"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p className="text-center">
                  You've already rated this movie {watchedUserRating}
                  <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
