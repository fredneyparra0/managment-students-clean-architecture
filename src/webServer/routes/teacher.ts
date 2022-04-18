import { Router, Request, Response } from 'express'
import { RespositoryTeacherMongoDb } from '../../dataAccess/mongoDb/repositories/teacher-repository'
import { UseCaseTeacher } from '../../useCases/teacher'
import { TeacherController } from '../controllers/teacher-controller'

export const teacherRoutes = Router()

// const controller = new TeacherController(
//   new UseCaseTeacher(
//     new RespositoryTeacherMongoDb()
//   )
// )

const controller = new RespositoryTeacherMongoDb()

teacherRoutes.get('', (_req, res) => {
  const response = controller.findAllTeachers()
  res.json(response)
})

// teacherRoutes.get('', async (req: Request, res: Response) => (await controller.teachersFindAll(req, res)))

// teacherRoutes.get('/:id', async (req: Request, res: Response) => (await controller.teacherFindById(req, res)))

// teacherRoutes.post('', async (req: Request, res: Response) => (await controller.teacherCreate(req, res)))

// teacherRoutes.put('/:id', async (req: Request, res: Response) => (await controller.teacherUpdate(req, res)))

// teacherRoutes.delete('/:id', async (req: Request, res: Response) => (await controller.teacherDelete(req, res)))
