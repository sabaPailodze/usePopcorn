import React from "react";

const Header = ({ movies, query, setQuery }) => {
  return (
    <header className="flex justify-between items-center p-6 px-12 bg-[var(--color-primary)] rounded-[0.9rem]">
      <div className="flex items-center gap-3">
        <span className="text-[40px]">🍿</span>
        <h1 className="text-[30px] font-semibold text-white">usePopcorn</h1>
      </div>
      <input
        className="self-center border-none py-4 px-6 text-[1.8rem] rounded-lg transition-all duration-300 outline-none bg-[var(--color-primary-light)] w-[40rem] focus:outline-none focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:translate-y-[-2px] "
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="text-[20px]">
        Found <strong>{movies.length}</strong> results
      </p>
    </header>
  );
};

export default Header;
