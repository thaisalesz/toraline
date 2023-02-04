import { IPurchaseRequestData, Purchase } from "../interfaces";
import { listProductsService } from "./products.services";
import { listUsersService } from "./users.services";


const createPurchaseService = async ({userId, productsIds}: IPurchaseRequestData):Promise<Purchase> => {
    const users = await listUsersService()
    const products = await listProductsService()

    const user = users.find((user) => user.id == userId)
    const userProducts = products.filter((product) => productsIds.includes(product.id))

    const productsSum = userProducts.reduce((acc, cur) => acc + cur.price, 0)
    const discount = (productsSum *(Number(user!.tax)/100))/100

    const purchaseValue = productsSum - discount

    return purchaseValue
}

export { createPurchaseService }