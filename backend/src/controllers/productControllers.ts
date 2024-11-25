import { Request, Response, NextFunction } from 'express';
import { Error as MongooseError } from 'mongoose';
import Product from '../models/productModel';
import BadRequestError from '../errors/bad-request-error';
import IternalError from '../errors/iternal-error';
import ConflictError from '../errors/conflict-error';

export const getProducts = (_req: Request, res: Response, next: NextFunction) => Product.find({})
  .then((products) => res.send({ items: products, total: products.length }))
  .catch(() => next(new IternalError('Сервер недоступен')));

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const {
    description,
    image,
    title,
    category,
    price,
  } = req.body;
  return Product.create({
    description,
    image,
    title,
    category,
    price,
  })
    .then((product) => res.send({ item: product }))
    .catch((error) => {
      if (error instanceof Error && error.message.includes('E11000')) {
        next(new ConflictError('Такой заголовок товара уже существует'));
      } else if (error instanceof MongooseError.ValidationError) {
        next(new BadRequestError(error.message));
      } else {
        return next(new IternalError('Сервер недоступен'));
      }
    });
};
