import { Request, Response, NextFunction } from 'express';
import { IError } from '../config';

const errorHandler = (err: IError, _req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).send({ message: err.message });
  next();
};
export default errorHandler;
