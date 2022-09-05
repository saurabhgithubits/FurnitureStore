import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product = new Product(0,'','',0,new Blob());

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute,
    private router:Router){};

  ngOnInit(): void {
    this.productService.getProduct(+this.route.snapshot.params['productId']).subscribe(
      data => {
      this.product = data; 
      console.log(this.product)
      })
  }

  updateProduct(){
    Swal.fire({  
      title: 'Do you want to update the product details ?',  
      showDenyButton: true,  showCancelButton: false,  
      confirmButtonText: `Yes`,  
      denyButtonText: `No`,
    }).then((result) => {  
        if (result.isConfirmed) {    
          this.productService.updateProduct(this.product).subscribe(
            (data:any) => { 
                console.log(data);
                Swal.fire('Product Updated Successful!!','' ,'success');
                this.router.navigate(['admin/products/products',this.product.productId]);
      
                
            },
            (error) => {
              console.log(error);
              Swal.fire('Product updation failed','','error');
            }
          );
        } else if (result.isDenied) {    
          Swal.fire('Not Updated','' ,'info' );
          this.router.navigate(['admin/products/products',this.product.productId]);
       }
    });
  }


}
