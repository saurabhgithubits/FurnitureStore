import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/cart';
import { Order } from 'src/app/entity/order';
import { Product } from 'src/app/entity/product';
import { User } from 'src/app/entity/user';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  enabled:any
  amount:any;
  user = new User(0,'','','','','','','','',true,[]);
  cart = new Cart(0,this.user,[]);
  order = new Order(0,new Date(),new Date(),0,0,this.user,[])
  products:Product[] = [];
  constructor(
    private orderService: OrderService,
    private loginService: LoginService,
    private cartService: CartService,
    private router: Router
  ) { 
       this.user = this.loginService.getUser();
       this.cartService.viewCart(this.user.userId).subscribe(
        data => {
        this.cart = data;
        this.products = this.cart.products; 
        console.log(this.cart)
        })    
   }
  
   handler:any = null;
 
   ngOnInit() {
    this.loadStripe();
  }
  ordering(){
    this.order.products = this.products;
    this.order.user = this.user;
    console.log(this.order)
    this.orderService.addOrder(this.order).subscribe(
      (data) => { 
          this.order = data;
          console.log( this.order);
          Swal.fire('Order Successful!!','Order Id: '+data.orderId ,'success');
          this.router.navigate(['user/myorder']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Order Failed','','error');
      }
    );
  
  }

  pay() {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire('Payment Successful!!','','success');
      }
     
    });
    
    handler.open({
      name: 'Furniture Store',
      description: '2 widgets',
      amount: this.amount*100
    });
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }


}
