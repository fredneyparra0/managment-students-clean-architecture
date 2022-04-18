import { IStudent } from '../interfaces/student-interface'
import { ObjectId } from 'mongoose'

export interface IRepositoryStudent {
  findAllStudents: (params?: any) => Promise<IStudent[] | null>
  findStudentById: (id: string | number | ObjectId) => Promise<IStudent | null>
  createStudent: (data: IStudent) => Promise<IStudent | null>
  updateStudent: (idStudent: string | number | ObjectId, data: IStudent) => Promise<IStudent | null>
  deleteStudent: (idUserDelete: string | number, idTeacher: string | number) => Promise<IStudent | null>
}
