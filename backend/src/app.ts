import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { errors } from 'celebrate';
import errorHandler from './middlewares/errorHandler';
import { errorLogger, requestLogger } from './middlewares/logger';
import productRouter from './routes/productRoutes';
import orderRouter from './routes/orderRoutes';
import { PORT, cors } from './config';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/weblarek');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(requestLogger);

app.use('/product', productRouter);
app.use('/order', orderRouter);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
