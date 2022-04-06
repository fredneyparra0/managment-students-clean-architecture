import { connect } from 'mongoose';

export class ConnectionMongoDb {
    static connection() {
        return connect('http://localhost:27017/schoolAdministrate');
    }
}