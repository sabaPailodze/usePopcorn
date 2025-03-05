import React from "react";

const Header = ({ movies, query, setQuery }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-6 px-6 sm:px-12 bg-[#6741d9] rounded-[0.9rem] gap-4">
      <div className="flex items-center gap-3">
        <span className="text-[30px] md:text-[40px]">🍿</span>
        <h1 className="text-[30px] font-semibold text-white">usePopcorn</h1>
      </div>
      <input
        className="self-center border-none py-4 px-6 text-[1.8rem] rounded-lg transition-all duration-300 outline-none bg-[#7950f2] w-[80%] md:w-[50%] focus:outline-none focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:translate-y-[-2px] "
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {
          const newQuery = e.target.value;
          setQuery(newQuery.trim() ? newQuery : "");
        }}
      />
      <p className="text-[22px] text-center">
        Found <strong>{movies.length}</strong> results
      </p>
    </header>
  );
};

export default Header;
