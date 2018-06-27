import { Router } from '@angular/router';
import { RequestService } from './../services/request.service';
import { Cart } from './../models/cart.model';
import { Product } from './../models/product.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Input ,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

declare var Materialize:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy  {

  private cart:Cart;
  private totalPrice:number;
  private totalItem:number;
  constructor(private cartService:CartService,  private requestService:RequestService ,private r:Router) {
   }

  ngOnInit() {
    this.cartService.get().subscribe(data=>{this.cart=data; this.totalPrice = data.getTotalPrice(); this.totalItem= data.getTotalItem() });
  }

  checkout(){
    // this.requestService.submitCart(this.cart).subscribe(
      // success=>{this.cartService.destroyCart();Materialize.toast('Order Submitted!!', 5000); console.log(success)},
      // error=>console.log(error)
    // );
    this.r.navigateByUrl('/checkout');
  }

  isEmptyCart(){
    return this.totalItem<1;
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
