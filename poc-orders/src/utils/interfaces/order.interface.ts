import { Product } from "./product.interface";

export interface Order {
    id: number;
    name: string;
    userEmail: string;
    products: Product[];
};