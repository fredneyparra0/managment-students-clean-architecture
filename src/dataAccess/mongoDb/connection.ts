import { connect } from 'mongoose';

export class ConnectionMongoDb {
    static connection():Promise<typeof import("mongoose")> {
        return connect('mongodb://localhost:27017/schoolAdministrate');
    }
}