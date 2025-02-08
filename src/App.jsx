import { useState } from "react";
import Loader from "./Components/Atoms/Loader/Loader";
import Header from "./Components/Organisms/Header/Header";
import Main from "./Components/Organisms/Main/Main";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <div className="container m-auto p-5">
      <Header movies={movies} query={query} setQuery={setQuery} />
      <Main movies={movies} setMovies={setMovies} query={query} />
    </div>
  );
}

// star rating კომპონენტსი იმპორტი თავისი პროპსებით

{
  /* <StarRating
  maxRating={5}
  messages={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
/>  */
}
