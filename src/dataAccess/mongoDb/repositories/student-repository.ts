import { IStudent } from '../../../core/interfaces/student-interface';
import { ModelStudentMongoDb } from '../models/student-model';
import { ObjectId } from 'mongoose';


export class RepositoryStudentMongoDb {
    private modelStudent: ModelStudentMongoDb = new ModelStudentMongoDb();
    
    async findAllStudents(): Promise<IStudent[]> {
        try {
            return await this.modelStudent.modelStudentMongo.find().select(['-password', '-isDeleted']);
        } catch (err: unknown) {
            console.log('Error in mongoose ==> ',err);
            throw new Error('error internal mongoose');            
        }
    }
    
    async findStudentById(id: string | number | ObjectId): Promise<IStudent | null> {
        try {
            if(typeof id === "number") {
                id = this.convertIdFromString(id);
            }
            return await this.modelStudent.modelStudentMongo.findById(id).select(['-password', '-isDeleted']);
        } catch (err: unknown) {
            console.log('Error in mongoose ==> ',err);
            throw new Error('error internal mongoose');
        }
    }

    async createStudent(data: IStudent): Promise<IStudent>{
        try {
            return await this.modelStudent.modelStudentMongo.create(data);
        } catch (err: unknown) {
            console.log('Error in mongoose ==> ',err);
            throw new Error('error internal mongoose');
        }
    }

    async updateStudent(idStudent: string | number | ObjectId, data: IStudent): Promise<IStudent | null>{
        try {
            if(typeof idStudent === "number") {
                idStudent = this.convertIdFromString(idStudent);
            }
            return await this.modelStudent.modelStudentMongo.findByIdAndUpdate().select(['-password', '-isDeleted']);
        } catch (err: unknown) {
            console.log('Error in mongoose ==> ',err);
            throw new Error('error internal mongoose');
        }
    }

    async deleteStudent(idStudentFromDelete: string | number | ObjectId): Promise<IStudent | null>{
        try {
            if(typeof idStudentFromDelete === "number") {
                idStudentFromDelete = this.convertIdFromString(idStudentFromDelete);
            }
            return await this.modelStudent.modelStudentMongo.findByIdAndUpdate(idStudentFromDelete, 
                { isDeleted: true }, 
                { new: true })
                .select(['--password', '--isDeleted'])
        } catch (err: unknown) {
            console.log('Error in mongoose ==> ',err);
            throw new Error('error internal mongoose');
        }
    }

    private convertIdFromString(id: number) {
        return id.toString();
    }

}