import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import MovieList from "./MovieList/MovieList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Main = () => {
  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [error, setError] = useState("");
  // const query = "ssdsdfef";

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const KEY = "78b2ea7c";
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=movies`
        );
        if (!request.ok) {
          throw new Error("something went wrong with fetching movies");
        }
        const data = await request.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        console.log(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="mt-[40px] h-[80vh] flex justify-center gap-10">
      {/* მარცხენა დივი დასაც რენდერდება ფილმები  */}
      <div className="bg-[#2b3035] w-[42rem] max-w-[42rem] rounded-[14px] overflow-scroll relative">
        <button
          className="absolute top-3 right-3 rounded-[50%] border-none bg-[#212529] aspect-square text-white text-[14px] font-bold cursor-pointer z-10 h-[24px]"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {/* if isLoading is true im rendering loader component */}
        {isLoading && <Loader />}
        {/* if isLoading and error is false im rendering movielist component */}
        {!isLoading && !error && <MovieList movies={movies} />}
        {/* if error is true im rendering error message */}
        {error && <ErrorMessage message={error} />}
      </div>
      {/* მარჯვენა დივი სადაც დაფავორიტებული ფილმებია */}
      <div className="bg-[#2b3035] w-[42rem] max-w-[42rem] rounded-[14px] overflow-scroll relative">
        <button
          className="absolute top-3 right-3 rounded-[50%] border-none bg-[#212529] aspect-square text-white text-[14px] font-bold cursor-pointer z-10 h-[24px]"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
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
        )}
      </div>
    </main>
  );
};

export default Main;
