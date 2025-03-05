import React, { useState } from "react";
import FetchedMovies from "../../Molecules/FetchedMovies/FetchedMovies.jsx";
import WatchedMovies from "../../Molecules/WatchedMovies/WatchedMovies.jsx";
import { useLocalStorage } from "../../../hooks/useLocalStorage.jsx";

const Main = ({ movies, setMovies, query }) => {
  const average = (arr) => {
    return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  };

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  const [watched, setWatched] = useLocalStorage([], "watched");
  const [selectedId, setSelectedId] = useState(null);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  const KEY = "78b2ea7c";

  return (
    <main className="h-[60vh] sm:h-[80vh] flex justify-center gap-2 sm:gap-10">
      {/* left div, its the side where films are fetching */}
      <FetchedMovies
        movies={movies}
        setMovies={setMovies}
        query={query}
        handleSelectMovie={handleSelectMovie}
        handleCloseMovie={handleCloseMovie}
        KEY={KEY}
      />
      {/* right div, here is favourited movies */}
      <WatchedMovies
        watched={watched}
        setWatched={setWatched}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
        selectedId={selectedId}
        handleCloseMovie={handleCloseMovie}
        KEY={KEY}
      />
    </main>
  );
};

export default Main;
