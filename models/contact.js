const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema ({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }, 
})


const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
  phone: Joi.string().required(),
    favorite: Joi.boolean().required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const schemas = {
  addSchema,
  updateFavoriteSchema,
}
  
const Contact = model("contact", contactSchema);
module.exports = {
  Contact,
  schemas,
}