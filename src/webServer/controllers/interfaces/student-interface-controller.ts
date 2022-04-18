import { Request, Response } from 'express'

export interface IStudentController {
  StudentsFindAll: (req: Request, res: Response) => void
  studentById: (req: Request, res: Response) => void
  studentCreate: (req: Request, res: Response) => void
  studentUpdate: (req: Request, res: Response) => void
  studentDelete: (req: Request, res: Response) => void
}
