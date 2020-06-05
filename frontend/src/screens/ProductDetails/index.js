import React from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  SearchHeader, Container, RoundedBox,
} from "../../components";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100 h-full">
        <Container>
          <RoundedBox>
            <p>Product detail</p>
          </RoundedBox>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
