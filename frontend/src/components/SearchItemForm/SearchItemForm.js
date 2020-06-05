import React, { useState } from "react";

import { useDispatch } from "react-redux";

import SearchButton from "../SearchButton/SearchButton";
import TextInput from "../TextInput/TextInput";

import { searchItems } from "../../store/appSlice";

const SearchItemForm = () => {
  const dispatch = useDispatch();

  const [searchItemText, setSearchItemText] = useState("");

  const onChangeSearchItemInput = (event) => setSearchItemText(event.target.value);

  const handleSearchItem = (event) => {
    event.preventDefault();

    dispatch(searchItems({ query: searchItemText }));
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
