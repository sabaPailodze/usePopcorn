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
    <div className=" p-5">
      <Header movies={movies} query={query} setQuery={setQuery} />
      <Main movies={movies} setMovies={setMovies} query={query} />
    </div>
  );
}

// როდესაც rating - ის შევსებულ star - ს დავაჭერ მეორედ უნდა გაქრეს წინა
//  დარეითებული (toggle), რამენაირად starRating უნდა გავხადო რესპონსივი,
// ასევე ლისტში რომ დავამატებ მაგასაც გავუწერო რესპონსივი,
// fetchMovies კომპონენტს გავუწერო რესპონსივი
