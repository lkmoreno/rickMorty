import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    // <div className="Search">
    //   <input
    //     type="text"
    //     value={search}
    //     ref={searchInput}
    //     onChange={handleSearch}
    //   />
    // </div>
    <>
      
      <input
        placeholder="Search…"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        type="text"
      />
    </>
  );
};

export default Search;
