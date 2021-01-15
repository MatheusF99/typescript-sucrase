import {Router} from 'express'


import UserController from './controllers/userControllersIndex'
import UserControllerCreate from './controllers/userControllersCreate'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserControllerCreate.create)

export default routes