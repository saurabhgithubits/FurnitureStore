import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../entity/cart';
import baseUrl from '../entity/helper';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  public addToCart(userId:number, product: Product) {
    return this.http.put<Cart>(`${baseUrl}/cart/addToCart/${userId}`,product);
  }

  public removeFromCart(userId:number, product: Product) {
    return this.http.put<Cart>(`${baseUrl}/cart/removeFromCart/${userId}`,product);
  }

  public viewCart(userId:number) {
    return this.http.get<Cart>(`${baseUrl}/cart/${userId}`);
  }
}
