import express from 'express'
import 'express-async-errors'
import { errorMiddleware } from './middlewares/error.middleware'
import { appRoutes } from './routes'


const app = express()    
app.use(express.json())

app.use(appRoutes)

app.use(errorMiddleware)

    
export { app }