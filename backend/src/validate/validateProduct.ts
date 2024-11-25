import { Joi, celebrate, Segments } from 'celebrate';

const productSchema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  image: Joi.object({ fileName: Joi.string(), originalName: Joi.string() }),
  category: Joi.string().valid('софт-скил', 'хард-скил', 'другое', 'дополнительное', 'кнопка').required(),
  description: Joi.string().required(),
  price: [Joi.number(), Joi.valid(null)],
});

const productValidate = celebrate({
  [Segments.BODY]: productSchema,
});
export default productValidate;
