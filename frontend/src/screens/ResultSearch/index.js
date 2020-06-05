import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { searchItems } from "../../store/appSlice";

import {
  SearchHeader, ListItems, Container, Notification, RoundedBox,
} from "../../components";

import { useQuery } from "../../utils";


const ResultSearch = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const { items, loading, notification } = useSelector((state) => state.app);

  useEffect(() => {
    const isNotAlreadyFeatchingItems = !loading;

    if (isNotAlreadyFeatchingItems) {
      dispatch(searchItems({ query: query.get("search") }));
    }
  }, []);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100 h-full">
        <Container>
          <RoundedBox>
            {notification && <Notification notification={notification} />}
            <ListItems items={items} />
          </RoundedBox>
        </Container>
      </section>
    </>
  );
};

export default ResultSearch;
