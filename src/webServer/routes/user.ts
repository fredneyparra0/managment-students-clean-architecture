import { Router } from 'express';
import { UseCaseStudent } from '../../useCases/students';

import { UserController } from '../controllers/user-controller';
export const userRoutes = Router();

const controller = new UserController(new UseCaseStudent());

userRoutes.get('', controller.StudentsFindAll);

userRoutes.get('/:id', controller.studentById);

userRoutes.post('', controller.studentCreate);

userRoutes.put('/:id', controller.studentUpdate);

userRoutes.delete('/:id', controller.studentDelete);
