import { Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
import BadRequestError from '../errors/bad-request-error';
import validateTotal from '../utils/helpers';

const orderController = async (req: Request, res: Response, next: NextFunction) => {
  const { items, total } = req.body;
  const validTotal = await validateTotal(items, total);
  if (!items.length) {
    next(new BadRequestError('Товары отсутвуют в корзине'));
  } else if (validTotal.error) {
    next(new BadRequestError(validTotal.message));
  } else {
    res.status(200).send({ id: uuid(), total });
  }
};
export default orderController;
