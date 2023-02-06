import { AppError } from "../errors";
import { IProduct, IPurchaseRequestData, IUser, Purchase } from "../interfaces";
import { calculatePurchaseTaxValue } from "../utils/calculatePurchaseTaxValue";
import { listProductsService } from "./products.services";
import { listUsersService } from "./users.services";


const createPurchaseService = async ({userId, productsIds}: IPurchaseRequestData):Promise<Purchase> => {
    const users: IUser[] = await listUsersService()
    const products: IProduct[] = await listProductsService()

    const user: IUser | undefined = users.find((user) => user.id == userId)
    
    if(!user){
        throw new AppError('User not found', 404)
    }

    const userProducts:IProduct[] = products.filter((product) => productsIds.includes(product.id))

    if(userProducts.length != productsIds.length){
        throw new AppError('Some or all products not found', 404)
    }

    const purchaseValue:Purchase = calculatePurchaseTaxValue(user, userProducts)

    return purchaseValue
}

export { createPurchaseService }