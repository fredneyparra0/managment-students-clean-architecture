import { ConnectionMongoDb } from './mongoDb/connection'

export async function connectDataBase (): Promise<any> {
  try {
    if (process.env.DATA_DATABASE === 'MONGO') {
      const connect = new ConnectionMongoDb()
      const resConnect = await connect.connection()
      console.log('connected to database')
      return resConnect
    }
    // } else {
    //   const connect = new ConnectionMongoDb()
    //   const resConnect = await connect.connection()
    //   console.log('connected to database')
    //   return resConnect
    // }
  } catch (err: any) {
    console.log('Error in connection to Database', err)
  }
}
