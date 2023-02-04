import { Request, Response } from "express";
import { IProduct, IUser } from "../interfaces";
import { listProductsService } from "../services/products.services";
import { listUsersService } from "../services/users.services";


const listUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: IUser[] = await listUsersService()
    return res.status(200).json(users)
}

const listProductsController = async (req: Request, res: Response): Promise<Response> => {
    const products: IProduct[] = await listProductsService()
    return res.status(200).json(products)
}

export { listUsersController, listProductsController }