import 'dotenv/config';

export const cors = require('cors');

export const { PORT } = process.env;
export interface IError {
  statusCode: number;
  message: string;
}
