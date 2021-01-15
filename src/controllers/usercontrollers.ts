import {Request, Response} from 'express'
import User from '../schemas/user'
class UserController{
    public async index(req:Request, res: Response): Promise<string>{
        
    }
}

export default new UserController()