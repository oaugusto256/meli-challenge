const fetch = require("node-fetch");
const itemsRouter = require("express").Router();

const logger = require("../utils/logger");
const constructItems = require("../utils/constructItems");
const constructItem = require("../utils/constructItem");

const itemsSchema = require("../models/items");
const itemSchema = require("../models/item");

itemsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const urlItem = `https://api.mercadolibre.com/items/${id}`;
    const urlItemDescription = `https://api.mercadolibre.com/items/${id}/description`;

    const responseItem = await fetch(urlItem);
    const jsonItem = await responseItem.json();

    const responseItemDescription = await fetch(urlItemDescription);
    const jsonItemDescription = await responseItemDescription.json();

    const itemJson = constructItem({
      item: {
        ...jsonItem,
        description: jsonItemDescription.plain_text || ""
      }
    });

    if (itemSchema.validate(itemJson).error) {
      return res.status(422).json({ error: "item didn't match schema validation" });
    }

    return res.json(itemJson);
  } catch (error) {
    logger.error(error);

    return res.json({ error });
  }
});

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