import {Request, Response} from 'express'
import User from '../schemas/user'


class UserController{
    public async create(req:Request, res: Response): Promise<Response>{
        const users = await User.create(req.body)

        return res.json(users)
    }
}

export default new UserController()
