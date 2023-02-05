import { IProduct, Purchase } from "../interfaces";


export const calculatePurchaseTaxValue = (tax: string, products:IProduct[]): Purchase => {
    const productsSum: number = products.reduce((acc, cur) => acc + cur.price, 0)
    const discount: number = (productsSum *(Number(tax)/100))/100

    const purchaseValue: Purchase = productsSum - discount

    return purchaseValue
}