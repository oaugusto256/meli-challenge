import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cleanItem } from "../../store/appSlice";

const Item = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cleanItem());

    history.push(`/items/${item.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white border-b border-grey-100 p-4 flex"
    >
      <img className="h-auto w-48 min-w-48 rounded-md m-2" src={item.picture} alt="Product item" />
      <div className="p-4 w-full">
        <div className="flex justify-between mb-2">
          <h1 className="text-xl text-grey-900">{`${item.price.currency} ${item.price.amount}`}</h1>
          <span className="text-xs">{item.address.stateName}</span>
        </div>
        <span className="text-md">{item.title}</span>
      </div>
    </div>
  );
};

export default Item;
