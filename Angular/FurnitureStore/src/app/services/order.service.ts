import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../entity/helper';
import { Order } from '../entity/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http:HttpClient
  ) { }
  // Add order
  public addOrder(order:Order){
    return this.http.post<Order>(`${baseUrl}/order/add`,order)
  }

  // update order
  public updateorder(order:Order){
    return this.http.put<Order>(`${baseUrl}/order/`,order)
  }

  // View All Orders
  public getAllOrders(){
    return this.http.get<Order[]>(`${baseUrl}/order/findAllOrders`)
  }
  
  // Get Order By Id
  public getOrder(orderId:number){
    return this.http.get<Order>(`${baseUrl}/order/findProductById/${orderId}`);
  }

  public getOrderByUser(userId:number){
    return this.http.get<Order[]>(`${baseUrl}/order/OrdersById/${userId}`);
  }
}
