const fetch = require("node-fetch");
const logger = require("../utils/logger");

const itemsRouter = require("express").Router();


itemsRouter.get("/", async (req, res) => {
  const query = req.query;

  try {
    const response = await fetch(encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=​${query.q}`));
    const json = await response.json();

    return res.json({
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
  } catch (error) {
    logger.error(error);
  }
});

module.exports = itemsRouter;