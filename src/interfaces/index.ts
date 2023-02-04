export interface IUser{
    id: number;
    name: string;
    tax: string;
}

export interface IProduct{
    id: number;
    name: string;
    price: number;
}

export interface IPurchaseRequestData{
    userId: number;
    productsIds: number[];
}

export type Purchase = number;