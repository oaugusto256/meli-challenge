import React from "react";

import MercadoLibreLogo from "../assets/images/logo_ml.png";
import SearchIcon from "../assets/images/ic_search.png";

const SearchBox = () => (
  <div className="bg-yellow">
    <header className="container mx-auto flex items-center px-4 h-16">
      <img src={MercadoLibreLogo} alt="Mercado Libre Logo" />
      <input placeholder="Nunca dejes de buscar" className="flex-1 h-10 ml-8 p-4 rounded-sm rounded-r-none" type="text" />
      <button className="bg-grey flex items-center h-10 p-3 rounded-sm rounded-l-none" type="button">
        <img src={SearchIcon} alt="Search icon" />
      </button>
    </header>
  </div>
);

export default SearchBox;
