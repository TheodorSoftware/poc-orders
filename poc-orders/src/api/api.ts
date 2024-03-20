import axios, { AxiosResponse } from "axios";
import { Order } from "../utils/interfaces/order.interface";
import { Dispatch, SetStateAction } from "react";

export const getOrdersListForUser = async (
    userEmail:  string, 
    orders: Order[], 
    setOrders:Dispatch<SetStateAction<Order[]>>) => {
        const apiUrl: string = 'http://localhost:8082/order';

        const response: AxiosResponse<Order[]> = await axios.get(apiUrl);
        response.data.map( (order: Order) => {
        if(userEmail === order.userEmail){
            const toAddOrder:Order | undefined= orders.find((oldOrder:Order) => oldOrder.name === order.name);
            if(toAddOrder === undefined){
            setOrders( prevOrder => {
                return [
                ...prevOrder,
                order
                ]
            })
            }
        }
        });
        return await response.data;
}

export const getProducts = async (id: string) => {
    const apiUrl: string = `http://localhost:8082/order/${id}`;
    const response = await axios.get(apiUrl);
    return await response.data.products;
}