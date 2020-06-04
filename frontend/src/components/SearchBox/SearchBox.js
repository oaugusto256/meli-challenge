import React from "react";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import SearchButton from "../SearchButton/SearchButton";
import TextInput from "../TextInput/TextInput";

const SearchBox = () => (
  <header className="bg-yellow">
    <Container>
      <div className="flex items-center px-4 h-16">
        <Logo />
        <TextInput />
        <SearchButton />
      </div>
    </Container>
  </header>
);

export default SearchBox;
