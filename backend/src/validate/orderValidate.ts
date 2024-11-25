import { Joi, celebrate, Segments } from 'celebrate';

const orderSchema = Joi.object({
  payment: Joi.string().valid('card', 'online').required(), // card || online
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  total: Joi.number().required(),
  items: Joi.array().items(Joi.string()),
});

const orderReqValidate = celebrate({
  [Segments.BODY]: orderSchema,
});
export default orderReqValidate;
