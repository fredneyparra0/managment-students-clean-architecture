import { Request, Response, Router } from 'express';
import { RepositoryStudentMongoDb } from '../../dataAccess/mongoDb/repositories/student-repository';
import { UseCaseStudent } from '../../useCases/students';
import { UserController } from '../controllers/user-controller';

export const userRoutes = Router();

const controller: UserController = new UserController(new UseCaseStudent( new RepositoryStudentMongoDb()));

userRoutes.get('', (req: Request, res: Response) => (controller.StudentsFindAll(req, res)));

userRoutes.get('/:id', (req: Request, res: Response) => (controller.studentById(req, res)));

userRoutes.post('', (req: Request, res: Response) => (controller.studentCreate(req, res)));

userRoutes.put('/:id', (req: Request, res: Response) => (controller.studentUpdate(req, res)));

userRoutes.delete('/:id', (req: Request, res: Response) => (controller.studentDelete(req, res)));
