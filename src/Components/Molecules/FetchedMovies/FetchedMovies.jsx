import React, { useState, useEffect } from "react";
import Loader from "../../Atoms/Loader/Loader";
import MovieList from "../../Atoms/MovieList/MovieList";
import ErrorMessage from "../../Atoms/ErrorMessage/ErrorMessage";
import Button from "../../Atoms/Button/Button";

const FetchedMovies = ({ movies, setMovies, query }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = "78b2ea7c";

  console.log("Fetched movies in FetchedMovies:", movies);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const request = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!request.ok) {
          throw new Error("something went wrong with fetching movies");
        }
        const data = await request.json();
        if (data.Response === "False") throw new Error("Movie not found");
        console.log("API Response:", data);

        setMovies(data.Search);
        console.log(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchData();
  }, [query]);

  return (
    <div className="bg-[#2b3035] w-[42rem] max-w-[42rem] rounded-[14px] overflow-scroll relative">
      <Button isOpen={isOpen1} setIsOpen={setIsOpen1} />
      {/* if isLoading is true im rendering loader component */}
      {isLoading && <Loader />}
      {/* if isLoading and error is false im rendering movielist component */}
      {!isLoading && !error && isOpen1 && <MovieList movies={movies} />}
      {/* if error is true im rendering error message */}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FetchedMovies;
