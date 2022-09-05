import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/cart';
import { Product } from 'src/app/entity/product';
import { User } from 'src/app/entity/user';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  user = new User(0,'','','','','','','','',true,[]);
  product = new Product(0,'','',0,new Blob());
  products:Product[] =  [];
  cartproducts:Product[] =  [];
  cart = new Cart(0,this.user,[]);
  sorts:string[] = ['Price: Low to High','Price: High to Low',];

  constructor(private productService:ProductService,
              private cartService:CartService,
              private loginService:LoginService,
              private router: Router
            ) {
     this.user = this.loginService.getUser();

     this.productService.getAllProducts().subscribe(
      data => {
      this.products = data; 
      console.log(this.products)
      })    

      this.cartService.viewCart(this.user.userId).subscribe(
        (data) => { 
            this.cart.cartId = data.cartId;
        },
        (error) => {
          console.log(error);
        }
      );

    }

    ngOnInit(): void {
       
    }

   
  addCart(product: Product) {
   this.cartproducts.push(product);
   this.cart.user = this.user;
   this.cart.products = this.cartproducts;
   console.log(this.cart)
   this.cartService.addToCart(this.user.userId,product).subscribe(
    (data) => { 
        this.cart = data;
        console.log(this.cart);
        Swal.fire('Added to Cart!!','' ,'success');
    },
    (error) => {
      console.log(error);
      Swal.fire('Not added','','error');
    }
  );
 }

  checkout(product: Product) {
    this.router.navigate(['user/checkout']);
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

