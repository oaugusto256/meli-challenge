import React from "react";
import Item from "../Item/Item";

const ListItems = ({ items }) => (
  items.map((item) => (
    <Item key={item.id} item={item} />
  ))
);

export default ListItems;
