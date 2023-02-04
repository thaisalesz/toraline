import { Router } from 'express'
import { listUsersController } from '../controllers/users.controllers'

const appRoutes = Router()

appRoutes.get('/users', listUsersController)

export { appRoutes }