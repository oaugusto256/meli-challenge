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
      currency: item.installments.currency_id,
      amount: item.installments.amount,
      decimals: item.installments.rate
    },
    address: {
      stateName: item.address.state_name
    },
    picture: item.thumbnail,
    condition: item.condition,
    freeShipping: item.shipping.free_shipping
  }))
});

module.exports = constructItems;