import { Product } from './product.model';


export class CartItem{

    product:Product;
    count:number;
    
    constructor(product,count){
        this.product=product;
        this.count=count;
    }

    getSubtotal():number{
        return this.product.price * this.count;
    }

    checkStock():boolean{
        return this.count<this.product.quantity;
    }
    

}