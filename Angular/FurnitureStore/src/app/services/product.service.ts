import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../entity/helper';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http:HttpClient
  ) { }
  // Add Product
  public addProduct(product:Product){
    return this.http.post<Product>(`${baseUrl}/product/create`,product)
  }

  // update Product
  public updateProduct(product:Product){
    return this.http.put<Product>(`${baseUrl}/product/editProduct/${product.productId}`,product)
  }
  
  // View All Products
  public getAllProducts(){
    return this.http.get<Product[]>(`${baseUrl}/product/findAllProducts`)
  }
  

  // Get Product By Id
  public getProduct(productId:number){
    return this.http.get<Product>(`${baseUrl}/product/findProductById/${productId}`);
  }

  // Delete Product By Id
  public deleteProduct(productId:number){
    return this.http.delete(`${baseUrl}/product/deleteProduct/${productId}`);
  }

  
}
