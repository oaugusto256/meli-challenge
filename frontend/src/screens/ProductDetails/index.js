import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getItem } from "../../store/appSlice";

import {
  SearchHeader, Container, RoundedBox, Notification,
} from "../../components";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, item, notification } = useSelector((state) => state.app);

  console.log(item);

  useEffect(() => {
    const isNotAlreadyFeatchingItems = !loading;

    if (isNotAlreadyFeatchingItems) {
      dispatch(getItem({ id }));
    }
  }, []);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100 h-full">
        <Container>
          <RoundedBox>
            {notification && <Notification notification={notification} />}
            {!loading && (
              <div>
                <div className="flex">
                  <div className="flex-1 justify-center">
                    <img
                      src={item.picture}
                      alt="Product item"
                      className="h-full w-64 rounded-md mx-auto"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-md">{`${item.condition} - ${item.soldQuantity} vendidos`}</span>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <h1 className="text-2xl font-bold">{`${item.price.currency} ${item.price.amount}`}</h1>
                  </div>
                </div>
              </div>
            )}
          </RoundedBox>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
