import { IProduct, IUser, Purchase } from "../interfaces";


export const calculatePurchaseTaxValue = (user:IUser, products:IProduct[]): Purchase => {
    const productsSum: number = products.reduce((acc, cur) => acc + cur.price, 0)    
    const tax = Number(user.tax)

    let purchaseValue:Purchase = productsSum

    if(tax > 100){
        const purchaseTaxTotal: number = (productsSum *(tax-100))/100
        purchaseValue = productsSum + purchaseTaxTotal
    }else if(tax < 100){
        const purchaseDiscountTotal: number = (productsSum *(tax))/100
        purchaseValue = productsSum - purchaseDiscountTotal
    }

    return Math.round(purchaseValue*100)/100
}