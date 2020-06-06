import React from "react";

import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import SearchItemForm from "../SearchItemForm/SearchItemForm";

const SearchHeader = () => (
  <header className="bg-yellow">
    <Container>
      <div className="flex items-center h-16">
        <Logo />
        <SearchItemForm />
      </div>
    </Container>
  </header>
);

export default SearchHeader;
