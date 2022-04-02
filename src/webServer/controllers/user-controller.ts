import { Request, Response } from 'express';

export class UserController {
    

    getAllUsers(req: Request, res: Response) {
        res.send('hey!!!');
    }
}