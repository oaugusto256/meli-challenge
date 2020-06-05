import React from "react";

const ListItems = ({ items }) => (
  items.length === 0 ? (
    <div className="bg-white">
      <h1 className="p-8 text-grey-900 text-center text-xl">No se encontró nada!</h1>
    </div>
  ) : (
      items.map((item) => (
        <div key={item.id} className="cursor-pointer bg-white border-b border-grey-100 p-4 flex">
          <img className="h-48 w-48 rounded-md m-2" src={item.picture} alt="Product item" />
          <div className="p-8 w-full">
            <div className="flex justify-between mb-2">
              <h1 className="text-xl text-grey-900">{`${item.price.currency} ${item.price.amount}`}</h1>
              <span className="text-xs">{item.address.stateName}</span>
            </div>
            <span className="text-md">{item.title}</span>
          </div>
        </div>
      ))
    )
);


export default ListItems;
