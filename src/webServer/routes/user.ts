import { Router } from 'express';

import { UserController } from '../controllers/user-controller';
export const userRoutes = Router();

const controller = new UserController();

userRoutes.get('', controller.getAllUsers);

