import { Request, Response, NextFunction } from 'express';
import Product from '../models/productModel';
import IternalError from '../errors/iternal-error';

const getProducts = (_req: Request, res: Response, next: NextFunction) => Product.find({})
  .then((products) => res.send({ items: products, total: products.length }))
  .catch(() => next(new IternalError('Сервер недоступен')));

// const createProduct = (req: Request, res: Response) => {
//   const {
//     description,
//     image,
//     title,
//     category,
//     price,
//   } = req.body;
//   return Product.create({
//     description,
//     image,
//     title,
//     category,
//     price,
//   })
//     .then((product) => res.send({ item: product }))
//     .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
// };

export default getProducts;
