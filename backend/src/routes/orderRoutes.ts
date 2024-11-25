import { Router } from 'express';
import createOrder from '../controllers/orderControllers';
import orderReqValidate from '../validate/orderValidate';

const router = Router();

router.post('/', orderReqValidate, createOrder);

export default router;
