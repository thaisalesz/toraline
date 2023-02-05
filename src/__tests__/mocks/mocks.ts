import { IProduct, IPurchaseRequestData, IUser } from "../../interfaces";

export const mockedUserInvalidId: IUser = {
    id: 101,
    name: "mockedUser",
    tax: "10"
}

export const mockedPurchaseInvalidUserId = (productsIds: number[]):IPurchaseRequestData => {
    return {
        userId: mockedUserInvalidId.id,
        productsIds: productsIds
    }
}

export const mockedProductInvalidId: IProduct = {
    id: 101,
    name: "mockedProduct",
    price: 10
}

export const mockedProduct2: IProduct = {
    id: 2,
    name: "mockedProduct",
    price: 1500
}

export const mockedProduct3: IProduct = {
    id: 3,
    name: "mockedProduct",
    price: 500
}

export const mockedPurchaseInvalidProductId = (userId: number):IPurchaseRequestData => {
    return {
        userId: userId,
        productsIds: [
            mockedProductInvalidId.id,
            mockedProduct2.id,
            mockedProduct3.id
        ]
    }
}

