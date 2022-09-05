import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/entity/product';
import { User } from 'src/app/entity/user';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: Product = new Product(0,'','',0,new Blob());
  products:Product[] =  [];
  sorts:string[] = ['Price: Low to High','Price: High to Low',];

  editCurrentProduct = false;
  constructor(private productService:ProductService,
              private router: Router
            ) {
     this.productService.getAllProducts().subscribe(
      data => {
      this.products = data; 
      console.log(this.products)
      })    
    }

    ngOnInit(): void {
       
    }
     

    // Sort Products
    sortProducts(sort:string){
      if(sort=='Price: Low to High'){
        this.productService.getAllProducts().subscribe(
          data => {
          this.products = data; 
          this.products?.sort((a, b) => (a.price > b.price ? 1 : -1))
          });  
      }
      else if(sort=='Price: High to Low'){
        this.productService.getAllProducts().subscribe(
          data => {
          this.products = data; 
          this.products?.sort((a, b) => (a.price > b.price ? -1 : 1))
          }); }
    }

}
