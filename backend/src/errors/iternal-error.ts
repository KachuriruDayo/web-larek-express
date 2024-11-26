import { IError } from '../config';

class IternalError extends Error implements IError {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 500;
  }
}
export default IternalError;
