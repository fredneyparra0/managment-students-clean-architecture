import { Request, Response } from 'express'

export interface ITeacherController {
  teachersFindAll: (req: Request, res: Response) => void
  teacherFindById: (req: Request, res: Response) => void
  teacherCreate: (req: Request, res: Response) => void
  teacherUpdate: (req: Request, res: Response) => void
  teacherDelete: (req: Request, res: Response) => void
}
