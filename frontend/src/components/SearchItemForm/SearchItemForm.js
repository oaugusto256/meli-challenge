import React, { useState } from "react";

import SearchButton from "../SearchButton/SearchButton";
import TextInput from "../TextInput/TextInput";


const SearchItemForm = () => {
  const [searchItemText, setSearchItemText] = useState("");

  const onChangeSearchItemInput = (event) => setSearchItemText(event.target.value);

  const handleSearchItem = (event) => {
    event.preventDefault();

    console.log("handleSearchItem");
  };

  return (
    <form
      onSubmit={handleSearchItem}
      className="flex flex-1 items-center"
    >
      <TextInput
        value={searchItemText}
        onChange={onChangeSearchItemInput}
      />
      <SearchButton />
    </form>
  );
};

export default SearchItemForm;
