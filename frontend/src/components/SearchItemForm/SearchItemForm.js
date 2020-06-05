import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import SearchButton from "../SearchButton/SearchButton";
import TextInput from "../TextInput/TextInput";

import { searchItems } from "../../store/appSlice";

const SearchItemForm = () => {
  const [searchItemText, setSearchItemText] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeSearchItemInput = (event) => setSearchItemText(event.target.value);

  const handleSearchItem = (event) => {
    event.preventDefault();

    history.push(`/items?search=${searchItemText}`);

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
