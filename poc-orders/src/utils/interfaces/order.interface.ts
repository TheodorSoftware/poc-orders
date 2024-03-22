import { Product } from "./product.interface";

export interface Order {
    id: number;
    name: string;
    userEmail: string;
    orderName: string;
    receiver: string;
    sender: string;
    products: Product[];
};