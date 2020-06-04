const constructItems = (json) => ({
  author: {
    name: "Otavio",
    lastname: "Augusto"
  },
  categories: ["Test", "Test", "Test", "Test"],
  items: json.results.slice(0, 4).map(item => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.available_quantity,
      decimals: 0,
    },
    picture: item.thumbnail,
    condition: item.condition,
    freeShipping: item.shipping.free_shipping
  }))
});

module.exports = constructItems;