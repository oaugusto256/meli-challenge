import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Item from "../Item/Item";

import { cleanItem } from "../../store/appSlice";

const ListItems = ({ items }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const onClickItem = ({ item }) => {
    dispatch(cleanItem());

    history.push(`/items/${item.id}`);
  };

  return (
    <div data-testid="list-items">
      {items && items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onClickItem={onClickItem}
        />
      ))}
    </div>
  );
};

export default ListItems;
