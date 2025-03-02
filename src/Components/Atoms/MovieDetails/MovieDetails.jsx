import React, { useState, useEffect } from "react";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";

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
        <Loader />
      ) : (
        <>
          <header className="flex">
            <button
              onClick={handleCloseMovie}
              className="absolute top-[0.6rem] left-[0.6rem] h-[3.2rem] aspect-square rounded-full border-none bg-white text-[#2b3035] shadow-[0_8px_20px_rgba(0,0,0,0.8)] font-sans text-[2.2rem] font-bold cursor-pointer z-[999] flex items-center justify-center"
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie} movie`}
              className="w-[33%]"
            />
            <div className="w-full p-[2.4rem_3rem] bg-[#343a40] flex flex-col gap-[1.4rem]">
              <h2 className="text-[2.4rem] mb-[0.4rem] leading-[1.1]">
                {title}
              </h2>
              <p className="flex items-center gap-3">
                {released} &bull; {runtime}
              </p>
              <p className="flex items-center gap-3">{genre}</p>
              <p className="flex items-center gap-3">
                <span>⭐️</span>
                {imdbRating}
                IMDB Rating
              </p>
            </div>
          </header>
          <section className="p-[4rem] flex flex-col gap-[1.6rem]">
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
