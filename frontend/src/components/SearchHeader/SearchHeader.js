import React from "react";

import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import SearchItemForm from "../SearchItemForm/SearchItemForm";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { searchItems } from "../../store/appSlice";


const SearchHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const searchItem = (searchItemText) => {
    history.push(`/items?search=${searchItemText}`);

    dispatch(searchItems({ query: searchItemText }));
  };

  return (
    <header className="bg-yellow">
      <Container>
        <div className="flex items-center h-16">
          <Logo />
          <SearchItemForm
            searchItem={searchItem}
          />
        </div>
      </Container>
    </header>
  );
};

export default SearchHeader;
