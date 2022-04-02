import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/main-routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-v1', router);

app.listen(process.env.PORT, () => console.log(`server is running in http://localhost/${process.env.PORT}`));