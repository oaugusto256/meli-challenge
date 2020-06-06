import React from "react";

import { useSelector } from "react-redux";

import {
  SearchHeader, Container, Notification, RoundedBox,
} from "../../components";

const SearchProduct = () => {
  const { notification } = useSelector((state) => state.app);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100 h-full">
        <Container>
          <RoundedBox>
            <Notification notification={notification} />
          </RoundedBox>
        </Container>
      </section>
    </>
  );
};

export default SearchProduct;
