import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = new Product(0,'','',0,new Blob());

  constructor(
    private productService: ProductService){};

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Product Added Successful!!','Product Id: '+data.productId ,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Product not added','','error');
      }
    );
  }

}
