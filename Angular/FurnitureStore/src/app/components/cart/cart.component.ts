import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/cart';
import { Product } from 'src/app/entity/product';
import { User } from 'src/app/entity/user';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum:number = 0;
  removeProducts : Product[] = [];
  user = new User(0,'','','','','','','','',true,[]);
  product = new Product(0,'','',0,new Blob());
  products:Product[] =  [];
  cart = new Cart(0,this.user,[]);
  updateCart = new Cart(0,this.user,[]);
  sorts:string[] = ['Price: Low to High','Price: High to Low',];
  
  constructor(private cartService:CartService,
              private loginService:LoginService,
              private router: Router
            ) {
              
             this.user = this.loginService.getUser();
             this.cartService.viewCart(this.user.userId).subscribe(
                data => {
                this.updateCart = data;
                this.products = this.updateCart.products; 
                for (var val of this.products) {
                  this.sum = this.sum + val.price; 
                }
                console.log(this.updateCart)
                })    
                 
  }

    ngOnInit(): void {
       
    }

   
  removeCart(product: Product) {
    this.removeProducts.push(product);
    this.cart.user = this.user;

    this.cartService.viewCart(this.user.userId).subscribe(
      data => {
      this.cart = data;
      })    
    this.cart.products = this.removeProducts;
    console.log(this.cart);
    
    this.cartService.removeFromCart(this.user.userId, product).subscribe(
     (data) => { 
         this.cart = data;
         console.log(this.cart);
         Swal.fire('Removed From Cart!!','' ,'success');
         window. location. reload()
     },
     (error) => {
       console.log(error);
       Swal.fire('Not Removed','','error');
     }
   );
  }

  checkout(product: Product) {
    this.router.navigate(['user/checkout']);
   }
     
  }