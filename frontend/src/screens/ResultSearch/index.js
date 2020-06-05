import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import { searchItems } from "../../store/appSlice";

import { SearchHeader, ListItems, Container } from "../../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResultSearch = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const { items, notification } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(searchItems({ query: query.get("search") }));
  }, []);

  return (
    <>
      <SearchHeader />
      <section className="bg-grey-100 h-full">
        <Container>
          <div className="p-8">
            <div className="box-border rounded-md border-8 border-white">
              {notification ? (
                <div className="bg-white">
                  <h1 className="p-8 text-grey-900 text-center text-xl">{notification}</h1>
                </div>
              ) : (
                  <ListItems items={items} />
                )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResultSearch;
