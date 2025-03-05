import { useState, useEffect } from "react";
import Header from "./Components/Organisms/Header/Header";
import Main from "./Components/Organisms/Main/Main";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    document.title = "UsePopcorn";
  }, []);
  return (
    <div className="flex flex-col gap-5 xs:gap-10 p-5">
      <Header movies={movies} query={query} setQuery={setQuery} />
      <Main movies={movies} setMovies={setMovies} query={query} />
    </div>
  );
}
