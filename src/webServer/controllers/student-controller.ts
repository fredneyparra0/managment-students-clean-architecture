import { Request, Response } from 'express'
import { IStudent } from '../../core/interfaces/student-interface'
import { UseCaseStudent } from '../../useCases/students'
import { IStudentController } from './interfaces/student-interface-controller'

export class StudentController implements IStudentController {
  constructor (private readonly studentUseCase: UseCaseStudent) {}

  async StudentsFindAll (_req: Request, res: Response): Promise<void> {
    try {
      const responseData: IStudent[] | null = await this.studentUseCase.findAllStudents()
      res.json({ data: responseData })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async studentById (req: Request, res: Response): Promise<void> {
    try {
      const responseData: IStudent | null = await this.studentUseCase.findStudentById(req.params.id)
      res.json({ data: responseData })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async studentCreate (req: Request, res: Response): Promise<void> {
    try {
      const responseData: IStudent | null = await this.studentUseCase.createStudent(req.body)
      res.json({ data: responseData })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async studentUpdate (req: Request, res: Response): Promise<void> {
    try {
      const responseData: IStudent | null = await this.studentUseCase.updateStudent(req.params.id, req.body)
      res.json({ data: responseData })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }

  async studentDelete (req: Request, res: Response): Promise<void> {
    try {
      // TODO: req.body.idTeacher no is, find method for use req.query in this case
      const responseData: IStudent | null = await this.studentUseCase.deleteStudent(req.params.id, req.body.idTeacher)
      res.json({ data: responseData })
    } catch (err) {
      console.log('ERROR ==> ', err)
      res.status(404).send(err)
    }
  }
}
