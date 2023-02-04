import { api } from "../api";
import { AppError } from "../errors";
import { IProduct } from "../interfaces";


const listProductsService = async ():Promise<IProduct[]> => {
    const products = api.get('/products')
    .then(res => res.data)
    .catch(err => {
        throw new AppError(err.data)
    })

    return products
}

export { listProductsService }