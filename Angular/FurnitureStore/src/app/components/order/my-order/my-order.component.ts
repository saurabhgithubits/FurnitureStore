import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/entity/order';
import { Product } from 'src/app/entity/product';
import { User } from 'src/app/entity/user';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  user = new User(0,'','','','','','','','',true,[]);
  order = new Order(0,new Date(),new Date(),0,0,this.user,[])
  orders: Order[] = [];
  products:Product[] = [];
  
  constructor(private orderService:OrderService,
              private productService:ProductService,
              private loginService: LoginService) {
               
               this.user = this.loginService.getUser();
               this.orderService.getOrderByUser(this.user.userId).subscribe(
                data => {
                this.orders = data; 
                console.log(this.orders);
                })    
               }

  ngOnInit(): void {
  }

}
