import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getItem } from "../../store/appSlice";

import {
  SearchHeader, Container, RoundedBox, Notification, ItemDetail,
} from "../../components";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, notification } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getItem({ id }));
  }, []);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100">
        <Container>
          <RoundedBox>
            <Notification notification={notification} />
            <ItemDetail item={item} />
          </RoundedBox>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
