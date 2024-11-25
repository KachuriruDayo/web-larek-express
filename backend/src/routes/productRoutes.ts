import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/productControllers';
import productValidate from '../validate/validateProduct';

const router = Router();
router.get('/', getProducts);
router.post('/', productValidate, createProduct);

export default router;
