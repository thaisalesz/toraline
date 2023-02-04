import { Request, Response } from "express";
import { IProduct, IPurchaseRequestData, IUser, Purchase } from "../interfaces";
import { listProductsService } from "../services/products.services";
import { createPurchaseService } from "../services/purchase.services";
import { listUsersService } from "../services/users.services";


const listUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: IUser[] = await listUsersService()
    return res.status(200).json(users)
}

const listProductsController = async (req: Request, res: Response): Promise<Response> => {
    const products: IProduct[] = await listProductsService()
    return res.status(200).json(products)
}

const createPurchaseController = async (req: Request, res: Response): Promise<Response> => {
    const purchaseData: IPurchaseRequestData = req.body

    const purchaseValue: Purchase = await createPurchaseService(purchaseData)
    return res.status(200).json(purchaseValue)
}

export { listUsersController, 
        listProductsController,
        createPurchaseController }