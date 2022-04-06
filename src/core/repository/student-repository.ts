import { IStudent } from "../interfaces/student-interface";

export interface IRepositoryStudent {
    StudentsFindAll(): IStudent[];
    studentById(id: string): IStudent;
    studentCreate(data: IStudent): IStudent;
    studentUpdate(idUser: string, dataUpdate: IStudent): IStudent;
    studentDelete(idUserDelete: string): IStudent;
}