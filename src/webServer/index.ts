import express, { Express } from 'express'
import dotenv from 'dotenv'
import { router } from './routes/main-routes'
import { connectDataBase } from '../dataAccess/connectDatabase'
dotenv.config()

connectDataBase()
export const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', router)

app.listen(process.env.PORT, () => console.log('server is running in http://localhost:3100'))
