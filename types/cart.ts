import {IProduct} from "./product";

export type CartItem = {
    id: string;
    count: number
}
export type CartState = {
    items: CartItem[]
}

export type CartPopulatedItem = CartItem & {
    product: IProduct;
}