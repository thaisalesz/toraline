import { Router } from 'express'
import { createPurchaseController, listProductsController, listUsersController } from '../controllers/controllers'

const appRoutes = Router()

appRoutes.get('/users', listUsersController)
appRoutes.get('/products', listProductsController)
appRoutes.post('/purchase', createPurchaseController)

export { appRoutes }