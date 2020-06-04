const fetch = require("node-fetch");
const itemsRouter = require("express").Router();

const logger = require("../utils/logger");
const constructItems = require("../utils/constructItems");

const itemsSchema = require("../models/items");

itemsRouter.get("/", async (req, res) => {
  try {
    const { q } = req.query;
    const url = encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`);

    const response = await fetch(url);
    const json = await response.json();

    const itemsJson = constructItems(json);

    if (itemsSchema.validate(itemsJson).error) {
      return res.status(422).json({ error: "items didn't match schema validation" });
    }

    return res.json(itemsJson);
  } catch (error) {
    logger.error(error);

    return res.json({ error });
  }
});

module.exports = itemsRouter;