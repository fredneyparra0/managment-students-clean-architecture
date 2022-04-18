import { ITeacher } from '../core/interfaces/teacher-interface'
import { RespositoryTeacherMongoDb } from '../dataAccess/mongoDb/repositories/teacher-repository'

export class UseCaseTeacher {
  // TODO: logica de negocio
  constructor (private readonly repository: RespositoryTeacherMongoDb) {}

  async findAllTeachers (): Promise<ITeacher[]> {
    try {
      return await this.repository.findAllTeachers()
    } catch (err) {
      throw new Error('error in <Error>')
    }
  }

  async findTeacherById (id: string | number): Promise<ITeacher | null> {
    try {
      return await this.repository.findTeacherById(id)
    } catch (err) {
      throw new Error('error in <Error>')
    }
  }

  async createTeacher (data: ITeacher): Promise<ITeacher> {
    try {
      return await this.repository.createTeacher(data)
    } catch (err) {
      throw new Error('error in <Error>')
    }
  }

  async updateTeacher (idTeacher: string | number, data: ITeacher): Promise<ITeacher | null> {
    try {
      return await this.repository.updateTeacher(idTeacher, data)
    } catch (err) {
      throw new Error('error in <Error>')
    }
  }

  async deleteTeacher (idTeacher: string | number): Promise<ITeacher | null> {
    try {
      return await this.repository.deleteStudent(idTeacher)
    } catch (err) {
      throw new Error('error in <Error>')
    }
  }
}
