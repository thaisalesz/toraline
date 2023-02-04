import { AppError } from "../errors";
import { IPurchaseRequestData, Purchase } from "../interfaces";
import { listProductsService } from "./products.services";
import { listUsersService } from "./users.services";


const createPurchaseService = async ({userId, productsIds}: IPurchaseRequestData):Promise<Purchase> => {
    const users = await listUsersService()
    const products = await listProductsService()

    const user = users.find((user) => user.id == userId)
    
    if(!user){
        throw new AppError('User not found', 404)
    }

    const userProducts = products.filter((product) => productsIds.includes(product.id))

    if(userProducts.length != productsIds.length){
        throw new AppError('Some or all products not found', 404)
    }

    const productsSum = userProducts.reduce((acc, cur) => acc + cur.price, 0)
    const discount = (productsSum *(Number(user!.tax)/100))/100

    const purchaseValue = productsSum - discount

    return purchaseValue
}

export { createPurchaseService }