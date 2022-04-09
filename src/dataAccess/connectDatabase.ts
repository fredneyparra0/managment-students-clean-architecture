import { ConnectionMongoDb } from './mongoDb/connection';


async function connectDataBase():Promise<void> {
    try {
        if(process.env.DATA_DATABASE === 'MONGO') {
            await ConnectionMongoDb.connection();
            console.log(`Connected sucessfull to database ${process.env.DATA_DATABASE}`);
        }
        else {
            await ConnectionMongoDb.connection();
            console.log('connected to database for default: MONGODB');
        }
    } catch (err) {
        console.log(`ERROR TO CONNECT DataBase ${process.env.DATA_BASE}`);
    }
}

connectDataBase();