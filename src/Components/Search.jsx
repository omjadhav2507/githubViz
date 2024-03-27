import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <header className="py-3 mb-3 border-bottom bg-black">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <form className="d-flex align-items-center" role="search" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control me-3"
            placeholder="Search..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Search;
