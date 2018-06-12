import express from 'express';
import { renderKeyboard } from '../controllers/keyboardController';

const router = express.Router();

router.get('/', renderKeyboard);

export default router;
