import React from "react";

const Item = ({ item, onClickItem }) => {
  const handleClick = () => {
    onClickItem({ item });
  };

  return (
    <div
      id="item"
      data-testid="item"
      onClick={handleClick}
      className="cursor-pointer bg-white border-b border-grey-100 p-4 flex"
    >
      <img className="h-auto w-48 min-w-48 rounded-md m-2" src={item.picture} alt="Product item image" />
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
