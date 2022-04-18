import { ObjectId } from 'mongoose'

export interface ITeacher {
  name: string
  email: string
  password: string
  age: number
  countrie: string
  dateOfBrithday: Date
  phoneNumber: number
  students: ObjectId[]
  rol: string
}
