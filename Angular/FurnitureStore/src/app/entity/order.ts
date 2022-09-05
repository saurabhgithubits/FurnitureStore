import { Product } from "./product";
import { User } from "./user";

export class Order{
    orderId:number;
    orderDate:Date;
    deliveryDate:Date;
    amount:number;
    status:DeliveryStatus;
    user: User;
    products: Product[];
   
constructor(
    orderId:number,
    orderDate:Date,
    deliveryDate:Date,
    amount:number,
    status:DeliveryStatus,
    user: User,
    products: Product[],
    ){ 
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
        this.amount = amount;
        this.status = status;
        this.user = user;
        this.products = products;
   }
}

enum DeliveryStatus {
    IN_PROCESS,
    DELIVERED,
    CANCELLED
}