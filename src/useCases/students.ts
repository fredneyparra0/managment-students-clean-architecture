import { IStudent } from '../core/interfaces/student-interface'
import { RepositoryStudentMongoDb } from '../dataAccess/mongoDb/repositories/student-repository'
import { ObjectId } from 'mongoose'
import { IRepositoryStudent } from '../core/repository/student-repository'
import { RespositoryTeacherMongoDb } from '../dataAccess/mongoDb/repositories/teacher-repository'
import { ITeacher } from '../core/interfaces/teacher-interface'
export class UseCaseStudent implements IRepositoryStudent {
  constructor (
    private readonly repository: RepositoryStudentMongoDb,
    private readonly repositoryTeacher: RespositoryTeacherMongoDb
  ) {}
  // TODO: logica de negocio

  async findAllStudents (_?: any): Promise<IStudent[] | null> {
    try {
      const dataRes = this.repository.findAllStudents()
      return await dataRes
    } catch (err: unknown) {
      throw new Error('error in <Error>')
    }
  }

  async findStudentById (id: string | number | ObjectId): Promise<IStudent | null> {
    try {
      const dataRes = this.repository.findStudentById(id)
      return await dataRes
    } catch (err: unknown) {
      throw new Error('error in <Error>')
    }
  }

  async createStudent (data: IStudent): Promise<IStudent | null> {
    try {
      const dataRes = this.repository.createStudent(data)
      return await dataRes
    } catch (err: unknown) {
      throw new Error('error in <Error>')
    }
  }

  async updateStudent (idStudent: string | number | ObjectId, data: IStudent): Promise<IStudent | null> {
    try {
      const dataRes = this.repository.updateStudent(idStudent, data)
      return await dataRes
    } catch (err: unknown) {
      throw new Error('error in <Error>')
    }
  }

  async deleteStudent (idFromDelete: string | number, idTeacher: string | number): Promise<IStudent | null> {
    try {
      const isAuthorizedTeacher: boolean = await this.isTeacherAdmin(idTeacher)
      if (!isAuthorizedTeacher) { throw new Error('Not Authorized for this action') }
      const dataRes = this.repository.deleteStudent(idFromDelete)
      return await dataRes
    } catch (err: unknown) {
      throw new Error('error in <Error>')
    }
  }

  private async isTeacherAdmin (idTeacher: string | number): Promise<boolean> {
    try {
      const teacher: ITeacher | null = await this.repositoryTeacher.findTeacherById(idTeacher)
      if (teacher != null) {
        if (teacher.rol === 'admin') { return true } else { return false }
      }
      return false
    } catch (err) {
      console.log('Error in validation Teacher ==> ', err)
      throw new Error('Error in <Error>')
    }
  }
}
