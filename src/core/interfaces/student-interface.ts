export interface IStudent {
    name: string;
    email: string;
    password?: string;
    dateOfBrithday: Date;
    age: number;
    coursingYear: string;
    countrie: string;
    phoneNumber: number;
    sectionOfStudent: string;
    isDeleted?: boolean;
}