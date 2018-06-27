import { CartItem } from './../models/cart-item.model';
import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequestService {

  constructor(private http:Http) { }

  setHeader(){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return headers;
  }

  //retrieve old Cart
  getCart():Cart{
    if (localStorage.getItem("cart") === null) {
      return null;

    }else
    {
      let oldItem:CartItem[]=[];
      const item = JSON.parse(localStorage.getItem('cart'));
      item.shoppingCart.forEach(element => {
         let cartitem:CartItem = new CartItem(element.product,element.count);
         oldItem.push(cartitem);
      });
      let cart = new Cart();
      cart.setCart(oldItem);
      return cart;
    }
  }
  saveCart(cart:Cart){
    localStorage.setItem('cart',JSON.stringify(cart));    
  }

  submitCart(cart:Cart){
    return this.http.post(`http://localhost:3000/cart/order`,{cart:cart},{headers:this.setHeader()})
      .map((res:Response)=>res.json())
      .catch(this.error);
  }

  getOrder(orderNumber:number){
    return this.http.get(`http://localhost:3000/cart/order?ordernumber=${orderNumber}`)
      .map((res:Response)=>res.json())
      .catch(err=>Observable.throw(err));
  } 

  private error(error:any){
    return Observable.throw(new Error(error));
  }
}

