import { Request, Response } from 'express';
import { IStudent } from '../../core/interfaces/student-interface';
import { UseCaseStudent } from '../../useCases/students';
import { IStudentController } from './interfaces/user-interface-controller';

export class UserController implements IStudentController {
    constructor(private studentUseCase: UseCaseStudent) {}
    
    async StudentsFindAll(req: Request, res: Response): Promise<void> {
        try {
            const responseData:IStudent[] | null = await this.studentUseCase.findAllStudents();
            res.json({ data:  responseData});
        } catch (err) {
            console.log('ERROR ==> ',err);
            res.status(404).send(err);
        }
    }

    async studentById(req: Request, res: Response): Promise<void> {
        try {
            const responseData:IStudent | null = await this.studentUseCase.findStudentById(req.params.id);
            res.json({ data:  responseData});
        } catch (err) {
            console.log('ERROR ==> ',err);
            res.status(404).send(err);
        }
    }

    async studentCreate(req: Request, res: Response): Promise<void> {
        try {
            const responseData:IStudent | null = await this.studentUseCase.createStudent(req.body);
            res.json({ data:  responseData});
        } catch (err) {
            console.log('ERROR ==> ',err);
            res.status(404).send(err);
        }
    }

    async studentUpdate(req: Request, res: Response): Promise<void> {
        try {
            const responseData:IStudent | null = await this.studentUseCase.updateStudent(req.params.id, req.body);
            res.json({ data:  responseData});
        } catch (err) {
            console.log('ERROR ==> ',err);
            res.status(404).send(err);
        }
    }

    async studentDelete(req: Request, res: Response): Promise<void> {
        try {
            const responseData:IStudent | null = await this.studentUseCase.deleteStudent(req.params.id);
            res.json({ data:  responseData});
        } catch (err) {
            console.log('ERROR ==> ',err);
            res.status(404).send(err);
        }
    }
}
