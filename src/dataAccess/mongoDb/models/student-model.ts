import { Schema, model,  } from 'mongoose';
import { IStudent } from '../../../core/interfaces/student-interface';
import { STUDENT_COLLECTION } from '../nameCollections';

export class ModelStudentMongoDb {
    private schemaStudent: Schema<IStudent> = new Schema({
        name: {
            type: String,
            required: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        countrie: {
            type: String,
            required: true
        },
        coursingYear: {
            type: String,
            required: true
        },
        dateOfBrithday: {
            type: Date,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        sectionOfStudent: {
            type: String,
            required: true
        }
    });
    
    modelStudentMongo = model<IStudent>('student', this.schemaStudent); 
}