import { Request, Response } from 'express';
import { IStudent } from '../../core/interfaces/student-interface';
import { UseCaseStudent } from '../../useCases/students';
import { IStudentController } from './interfaces/user-interface-controller';

export class UserController implements IStudentController {
    studentUseCase: UseCaseStudent;
    constructor(studentUseCase: UseCaseStudent) {
        this.studentUseCase = studentUseCase;
        console.log(studentUseCase.findAllStudents());
    }
    
    async StudentsFindAll(req: Request, res: Response): Promise<void> {
        try {
            res.json({ data: this.studentUseCase.findAllStudents() });
        } catch (err) {
            console.log('ERROR ==> ',err);
            res.status(300).send(err);
        }
    }

    studentById(req: Request, res: Response): void {
        res.send({
            // data: this.data[0]
        })
    }

    studentCreate(req: Request, res: Response): void {
        res.send({
            // data: this.data[0]
        })
    }

    studentUpdate(req: Request, res: Response): void {
        res.send({
            // data: this.data[0]
        })
    }

    studentDelete(req: Request, res: Response): void {
        res.send({
            // data: this.data[0]
        })
    }

}
