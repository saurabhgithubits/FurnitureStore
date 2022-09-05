import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 product = new Product(0,'','',0,new Blob());
 p:any;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router:Router     
             ) { }

  ngOnInit(): void {
    this.productService.getProduct(+this.route.snapshot.params['productId']).subscribe(
      data => {
      this.product = data; 
      console.log(this.product)
      })
  }

  edit(productId:number){
    console.log(productId);
    this.router.navigate(['admin/updateProduct',productId]);
  }

  delete(productId:number){
    Swal.fire({  
      title: 'Do you want to delete the Product ?',  
      showDenyButton: true,  showCancelButton: false,  
      confirmButtonText: `Yes`,  
      denyButtonText: `No`,
    }).then((result) => {  
        if (result.isConfirmed) {    
          this.productService.deleteProduct(this.product.productId).subscribe(
            (data:any) => { 
                console.log(data);
                Swal.fire('Product Deleted!!','' ,'success');
                this.router.navigate(['admin/products']);
            },
            (error) => {
              console.log(error);
              Swal.fire('Product not deleted','','error');
            }
          );  
        } else if (result.isDenied) {    
          Swal.fire('Not Deleted','' ,'info' )  
       }
    });
  }

}
