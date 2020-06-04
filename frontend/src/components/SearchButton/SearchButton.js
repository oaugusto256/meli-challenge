import React from "react";

import SearchIcon from "../../assets/images/ic_search.png";

const SearchButton = () => (
  <button className="bg-grey-100 flex items-center h-10 p-3 rounded-sm rounded-l-none" type="button">
    <img src={SearchIcon} alt="Search icon" />
  </button>
);

export default SearchButton;
