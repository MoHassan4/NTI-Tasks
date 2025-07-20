import express from 'express';
import { getCart, updateCart ,addToCart , removeFromCart , getCartByUserId, getCartAdmin} from '../controllers/cart.controller.js';
import { protect } from '../middleware/auth.js';
import { isAdmin } from '../middleware/role.js';

const router = express.Router();

router.get('/', protect, getCart);
router.get('/cartsforadmin/', protect,isAdmin, getCartAdmin);
router.put('/:recipeId', protect, updateCart);
router.post('/add', protect, addToCart)
router.delete('/:recipeId', protect, removeFromCart);
router.get('/:id', protect, isAdmin, getCartByUserId)

export default router;