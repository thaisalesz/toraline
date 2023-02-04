import axios from "axios";
import { IProduct } from "../interfaces";


const listProductsService = async ():Promise<IProduct[]> => {
    const products = axios.get('https://mockend.com/juunegreiros/BE-test-api/products')
    .then(res => res.data)
    .catch(err => console.log(err))

    return products
}

export { listProductsService }