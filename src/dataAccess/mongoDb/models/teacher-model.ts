import { Schema, model } from 'mongoose'
import { ITeacher } from '../../../core/interfaces/teacher-interface'
import { STUDENT_COLLECTION, TEACHER_COLLECTION } from '../nameCollections'

export class ModelTeacherMongoDb {
  private readonly schemaTeacher: Schema<ITeacher> = new Schema({
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
    dateOfBrithday: {
      type: Date,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: STUDENT_COLLECTION
      }
    ]
  })

  modelTeacherMongo = model<ITeacher>(TEACHER_COLLECTION, this.schemaTeacher)
}
