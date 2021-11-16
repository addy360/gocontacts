import React from "react";

const Search = () => {
  return (
    <div className="px-10 mb-5">
      <input
        type="text"
        className="py-2 text-center ring-1 text-secondary-50 rounded-md text-lg outline-none block w-full shadow-lg bg-transparent"
        placeholder="search contact"
      />
    </div>
  );
};

export default Search;
