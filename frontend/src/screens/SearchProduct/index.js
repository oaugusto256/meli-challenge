import React from "react";

import { useSelector } from "react-redux";

import { SearchHeader, Container } from "../../components";

const SearchProduct = () => {
  const { notification } = useSelector((state) => state.app);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100 h-full">
        <Container>
          <div className="p-8">
            <div className="box-border rounded-md border-8 border-white">
              <div className="bg-white">
                <h1 className="p-8 text-grey-900 text-center text-xl">{notification}</h1>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SearchProduct;
