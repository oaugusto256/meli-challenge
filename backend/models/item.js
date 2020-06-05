const Joi = require("@hapi/joi");

const itemSchema = Joi.object({
  author: {
    name: Joi.string().required(),
    lastname: Joi.string().required()
  },
  item: {
    id: Joi.string().required(),
    title: Joi.string().required(),
    price: {
      currency: Joi.string().required(),
      amount: Joi.number().required(),
      decimals: Joi.number().required()
    },
    picture: Joi.string().required(),
    condition: Joi.string().required(),
    soldQuantity: Joi.number().required(),
    description: Joi.string().required(),
    freeShipping: Joi.boolean().required()
  }
});

module.exports = itemSchema;