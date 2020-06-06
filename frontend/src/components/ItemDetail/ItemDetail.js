import React from "react";

const ITEM_CONDITION = {
  new: "Nuevo",
  used: "Usado",
};

const ItemDetail = ({ item }) => (
  item && (
    <div className="flex flex-wrap p-8">
      <div className="sm:w-full md:w-full lg:w-9/12 sm:px-0 md:px-4 lg:px-8">
        <img
          src={item.picture}
          alt="Product item"
          className="h-auto w-64 rounded-md mx-auto"
        />
        <div>
          <h2 className="text-2xl py-8">Descripción del producto</h2>
          <p className="text-md text-grey-500 leading-tight">{item.description}</p>
        </div>
      </div>
      <div className="sm:w-full md:w-full lg:w-3/12 sm:py-8 py-4">
        <span className="text-md">{`${ITEM_CONDITION[item.condition]} - ${item.soldQuantity} vendidos`}</span>
        <h2 className="text-lg font-bold">{item.title}</h2>
        <h1 className="text-4xl my-2 font-medium">{`${item.price.currency} ${item.price.amount}`}</h1>
        <button
          type="button"
          className="bg-blue text-white text-lg w-full my-8 py-2 px-4 rounded"
        >
          Comprar
        </button>
      </div>
    </div>
  )
);

export default ItemDetail;
