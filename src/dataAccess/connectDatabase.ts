import { ConnectionMongoDb } from './mongoDb/connection';

async function connectDataBase() {
    try {
        if(process.env.DATA_DATABASE === 'MONGO') {
            await ConnectionMongoDb.connection();
            console.log(`Connected sucessfull to database ${process.env.DATA_DATABASE}`);
        }
        // else {
        //     // await ConnectionPostgresql.connection();
        // }
    } catch (err) {
        console.log(`ERROR TO CONNECT DataBase ${process.env.DATA_BASE}`);
    }
}

connectDataBase()