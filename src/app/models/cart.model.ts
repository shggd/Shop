import { CartItem } from './cart-item.model';
import { Product } from './product.model';

export class Cart{
    private totalItem:number;
    private totalPrice:number;
    private shoppingCart:CartItem[];

    constructor(){
        this.shoppingCart=[];
    }

    public remove(item:Product){
        const data = this.shoppingCart.findIndex(pro=>pro.product.name===item.name);
        if (data > -1) {
            this.shoppingCart.splice(data,1);
        }
    }
    
    public add(item:Product, count:number):boolean{
        const data = this.shoppingCart.find(pro=>pro.product.name===item.name);
        if(data=== undefined){
            const newItem = new CartItem(item,count);
            this.shoppingCart.push(newItem);
            return true;
          }
          else{
            if(data.checkStock()){
                data.count = data.count + count;
                return true;
            }
            return false;
          } 
    }

    public update(item:CartItem,newCount:number){
        const data = this.shoppingCart.find(pro=>pro.product.name===item.product.name);
        if(data){
            data.count=newCount;
        }    
    }

    public setCart(cart:CartItem[]){
        this.shoppingCart = cart;
    }

    public getTotalPrice():number{
        this.totalPrice=0;        
        this.shoppingCart.forEach(price => {
          this.totalPrice+= price.getSubtotal();
        });
        return this.totalPrice;
    }

    public getTotalItem():number{
        this.totalItem=0;            
        this.shoppingCart.forEach(product=> this.totalItem+=product.count)
        return this.totalItem;
    }

    
}

