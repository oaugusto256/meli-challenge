const constructItem = ({ item }) => {
  return {
    author: {
      name: "Otavio",
      lastname: "Augusto"
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: item.rate || 0
      },
      picture: item.pictures ? item.pictures[0].url : "",
      condition: item.condition,
      soldQuantity: item.sold_quantity,
      description: item.description,
      freeShipping: item.shipping.free_shipping
    }
  };
};

module.exports = constructItem;