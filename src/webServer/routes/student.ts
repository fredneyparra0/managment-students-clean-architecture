import { Request, Response, Router } from 'express'
import { RepositoryStudentMongoDb } from '../../dataAccess/mongoDb/repositories/student-repository'
import { RespositoryTeacherMongoDb } from '../../dataAccess/mongoDb/repositories/teacher-repository'
import { UseCaseStudent } from '../../useCases/students'
import { StudentController } from '../controllers/student-controller'

export const userRoutes = Router()

const controller: StudentController = new StudentController(
  new UseCaseStudent(
    new RepositoryStudentMongoDb(),
    new RespositoryTeacherMongoDb()
  )
)

userRoutes.get('', async (req: Request, res: Response) => (await controller.StudentsFindAll(req, res)))

userRoutes.get('/:id', async (req: Request, res: Response) => (await controller.studentById(req, res)))

userRoutes.post('', async (req: Request, res: Response) => (await controller.studentCreate(req, res)))

userRoutes.put('/:id', async (req: Request, res: Response) => (await controller.studentUpdate(req, res)))

userRoutes.delete('/:id', async (req: Request, res: Response) => (await controller.studentDelete(req, res)))
