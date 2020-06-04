const Joi = require("@hapi/joi");

const itemsSchema = Joi.object({
  author: {
    name: Joi.string().required(),
    lastname: Joi.string().required()
  },
  categories: Joi.array().items(Joi.string()),
  items: Joi.array().items({
    id: Joi.string().required(),
    title: Joi.string().required(),
    price:
    {
      currency: Joi.string().required(),
      amount: Joi.number().integer().required(),
      decimals: Joi.number().required()
    },
    picture: Joi.string().required(),
    condition: Joi.string().required(),
    freeShipping: Joi.boolean().required()
  })
});

module.exports = itemsSchema;