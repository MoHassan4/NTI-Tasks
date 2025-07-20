import express from 'express';
import { getAllUsers, deleteUser } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.js';
import { isAdmin } from '../middleware/role.js';

const router = express.Router();

router.get('/', protect, isAdmin, getAllUsers);
router.delete('/:id', protect, isAdmin, deleteUser);

export default router;