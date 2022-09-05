export class Product{
    productId:number;
    productName:string;
    description:string;
    price:number;
    image:Blob;
   
constructor(
    productId:number,
    productName:string,
    description:string,
    price:number,
    image:Blob
    ){ 
     this.productId = productId;
     this.productName = productName
     this.description = description
     this.price = price;
     this.image = image;
   }
}