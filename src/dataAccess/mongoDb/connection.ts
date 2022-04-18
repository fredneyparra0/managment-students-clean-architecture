import { connect } from 'mongoose'

export class ConnectionMongoDb {
  connection (): any {
    if (process.env.TEST) {
      return connect('mongodb://localhost:27017/schoolAdministrate')
    } else {
      return connect('mongodb://localhost:27017/schoolAdministrate-test')
    }
  }
}
