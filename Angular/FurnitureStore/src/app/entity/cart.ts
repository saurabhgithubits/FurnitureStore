import { Product } from "./product";
import { User } from "./user";

export class Cart{
    cartId:number;
    user: User;
    products: Product[];
   
constructor(
    cartId:number,
    user: User,
    products: Product[],
    ){ 
     this.cartId = cartId;
     this.products = products;
     this.user = user;
   }
}