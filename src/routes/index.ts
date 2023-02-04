import { Router } from 'express'
import { listProductsController, listUsersController } from '../controllers/controllers'

const appRoutes = Router()

appRoutes.get('/users', listUsersController)
appRoutes.get('/products', listProductsController)

export { appRoutes }