import { CartItem } from './../models/cart-item.model';
import { RequestService } from './request.service';
import { Cart } from './../models/cart.model';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CartService {

  private cart:Cart = new Cart();
  private currentCart = new BehaviorSubject<Cart>(this.cart);

  constructor(private http:Http, private req:RequestService) { }

  get():Observable<Cart>{//get Cart
    if(this.req.getCart()){
      this.cart = this.req.getCart();
      this.currentCart.next(this.cart);
    }
    // this.cart = Object.assign(this.cart,this.req.getCart());
    return this.currentCart.asObservable(); 
  }
  
  destroyCart(){
    this.cart = new Cart();
    this.req.saveCart(this.cart);
    this.currentCart.next(this.cart);
  }


  add(item:Product, count:number):boolean{
    const success = this.cart.add(item,count);
    this.req.saveCart(this.cart);
    this.currentCart.next(this.cart);
    return success;
    
  }
  remove(item:Product){
    this.cart.remove(item);
    this.req.saveCart(this.cart);
    this.currentCart.next(this.cart);
  }
  
  update(item:CartItem, count:number){
    this.cart.update(item,count);
    this.req.saveCart(this.cart);
    this.currentCart.next(this.cart);
  }
  
  isEmpty():boolean{
    return this.cart.getTotalItem()==0;
  }
  
}
