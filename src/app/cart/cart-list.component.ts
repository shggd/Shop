import { CartItem } from './../models/cart-item.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {

  @Input() cartItem:CartItem;
  numbers:number[];
  subtotal:number;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.numbers = Array(this.cartItem.product.quantity).fill(0).map((x,i)=>i+1);
    this.subtotal= this.cartItem.getSubtotal();
  }

  change(value){
    value = parseInt(value);
    this.cartService.update(this.cartItem,value);
    this.subtotal= this.cartItem.getSubtotal();
  }
}
