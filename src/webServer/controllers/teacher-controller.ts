import { Request, Response } from 'express'
import { UseCaseTeacher } from '../../useCases/teacher'
import { ITeacherController } from './interfaces/teacher-interface'

export class TeacherController implements ITeacherController {
  constructor (private readonly teacherUseCase: UseCaseTeacher) {}

  async teachersFindAll (_req: Request, res: Response): Promise<void> {
    try {
      const responseData = await this.teacherUseCase.findAllTeachers()
      res.json({
        data: responseData
      })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async teacherFindById (req: Request, res: Response): Promise<void> {
    try {
      const responseData = await this.teacherUseCase.findTeacherById(req.params.id)
      res.json({
        data: responseData
      })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async teacherCreate (req: Request, res: Response): Promise<void> {
    try {
      const responseData = await this.teacherUseCase.createTeacher(req.body)
      res.json({
        data: responseData
      })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async teacherUpdate (req: Request, res: Response): Promise<void> {
    try {
      const responseData = await this.teacherUseCase.updateTeacher(req.params.id, req.body)
      res.json({
        data: responseData
      })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async teacherDelete (req: Request, res: Response): Promise<void> {
    try {
      const responseData = await this.teacherUseCase.deleteTeacher(req.params.id)
      res.json({
        data: responseData
      })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }
}
