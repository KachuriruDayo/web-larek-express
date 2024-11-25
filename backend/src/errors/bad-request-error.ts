import { IError } from '../config';

class BadRequestError extends Error implements IError {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}
export default BadRequestError;
