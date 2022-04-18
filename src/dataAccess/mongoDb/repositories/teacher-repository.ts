import { ITeacher } from '../../../core/interfaces/teacher-interface'
import { ModelTeacherMongoDb } from '../models/teacher-model'
import { STUDENT_COLLECTION } from '../nameCollections'

export class RespositoryTeacherMongoDb {
  private readonly modelTeacher: ModelTeacherMongoDb = new ModelTeacherMongoDb()

  async findAllTeachers (): Promise<ITeacher[]> {
    try {
      return await this.modelTeacher.modelTeacherMongo.find({ isDeleted: false })
        .populate(STUDENT_COLLECTION)
        .select(['-isDeleted', '--password'])
    } catch (err) {
      console.log('Error in mongoose ==> ', err)
      throw new Error('error internal mongoose')
    }
  }

  async findTeacherById (id: string | number): Promise<ITeacher | null> {
    try {
      return await this.modelTeacher.modelTeacherMongo.findById(id, { isDeleted: false })
        .populate(STUDENT_COLLECTION)
        .select(['-isDeleted', '--password'])
    } catch (err) {
      console.log('Error in mongoose ==> ', err)
      throw new Error('error internal mongoose')
    }
  }

  async createTeacher (data: ITeacher): Promise<ITeacher> {
    try {
      return await this.modelTeacher.modelTeacherMongo.create(data)
    } catch (err) {
      console.log('Error in mongoose ==> ', err)
      throw new Error('error internal mongoose')
    }
  }

  async updateTeacher (id: string | number, data: ITeacher): Promise<ITeacher | null> {
    try {
      return await this.modelTeacher.modelTeacherMongo.findByIdAndUpdate(id, data, { new: true })
        .populate(STUDENT_COLLECTION)
        .select(['--iSDeleted', '--password'])
    } catch (err) {
      console.log('Error in mongoose ==> ', err)
      throw new Error('error internal mongoose')
    }
  }

  async deleteStudent (idTeacherDelete: string | number): Promise<ITeacher | null> {
    try {
      return await this.modelTeacher.modelTeacherMongo.findByIdAndUpdate(idTeacherDelete, { isDeleted: true }, { new: true })
        .populate(STUDENT_COLLECTION)
        .select(['--isDeleted', '--password'])
    } catch (err) {
      console.log('Error in mongoose ==> ', err)
      throw new Error('error internal mongoose')
    }
  }
}
