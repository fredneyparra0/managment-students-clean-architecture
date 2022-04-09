import { IStudent } from "../core/interfaces/student-interface";
import { RepositoryStudentMongoDb } from "../dataAccess/mongoDb/repositories/student-repository";
import { Query, Document, ObjectId } from 'mongoose';
import { IRepositoryStudent } from "../core/repository/student-repository";
export class UseCaseStudent implements IRepositoryStudent {

    constructor(private repository: RepositoryStudentMongoDb) {}
    //TODO: logica de negocio
    
    findAllStudents(params?: any): Promise<IStudent[] | null> {
        try {
            const dataRes = this.repository.findAllStudents();
            return dataRes;
        } catch (err: unknown) {
            throw new Error('error in <Error>');
        }
    }

    findStudentById(id: string | number | ObjectId): Promise<IStudent | null> {
        try {
            const dataRes = this.repository.findStudentById(id);
            return dataRes;
        } catch (err: unknown) {
            throw new Error('error in <Error>');
        }
    }

    createStudent(data: IStudent): Promise<IStudent | null> {
        try {
            const dataRes = this.repository.createStudent(data);
            return dataRes;
        } catch (err: unknown) {
            throw new Error('error in <Error>');
        }
    }

    updateStudent(idStudent: string | number | ObjectId,data: IStudent): Promise<IStudent | null> {
        try {
            const dataRes = this.repository.updateStudent(idStudent, data);
            return dataRes;
        } catch (err: unknown) {
            throw new Error('error in <Error>');
        }
    }

    deleteStudent(idFromDelete: string | number | ObjectId): Promise<IStudent | null> {
        try {
            const dataRes = this.repository.deleteStudent(idFromDelete);
            return dataRes;
        } catch (err: unknown) {
            throw new Error('error in <Error>');
        }
    }
}