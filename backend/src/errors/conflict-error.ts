import { IError } from '../config';

class ConflictError extends Error implements IError {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 409;
  }
}
export default ConflictError;
