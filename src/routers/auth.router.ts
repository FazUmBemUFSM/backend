import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller';

const ahtuRouter = Router();

ahtuRouter.route('/login').get(login);
ahtuRouter.route('/logout').get(logout);

export default ahtuRouter;
