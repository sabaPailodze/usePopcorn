// import React from "react";

// const MovieList = ({ movies, handleSelectMovie }) => {
//   return (
//     <ul className="list list-movies">
//       {movies?.map((movie) => (
//         <li key={movie.imdbID} onClick={() => handleSelectMovie(movie.imdbID)}>
//           <img src={movie.Poster} alt={`${movie.Title} poster`} />
//           <h3>{movie.Title}</h3>
//           <div>
//             <p>
//               <span>🗓</span>
//               <span>{movie.Year}</span>
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieList;

import React from "react";

const MovieList = ({ movies, handleSelectMovie }) => {
  return (
    <ul className="list-none p-2.5 overflow-scroll">
      {movies?.map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() => handleSelectMovie(movie.imdbID)}
          className="relative flex items-center gap-3 xs:gap-6 px-1 sm:px-4 py-4 border-b border-[#343a40] cursor-pointer transition-all duration-300 hover:bg-[#343a40]"
        >
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="w-24 xs:w-28 h-auto"
          />
          <div className="flex-1">
            <h3 className="text-[14px] xs:text-[16px] sm:text-[18px]">
              {movie.Title}
            </h3>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-1 text-[12px]] sm:text-[16px]">
                <span>🗓</span>
                <span>{movie.Year}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
