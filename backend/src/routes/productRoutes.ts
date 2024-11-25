import { Router } from 'express';
import getProducts from '../controllers/productControllers';

const router = Router();
router.get('/', getProducts);
// router.post('/', createProduct);

export default router;
