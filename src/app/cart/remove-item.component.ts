import { CartService } from './../services/cart.service';
import { Product } from './../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remove-item',
  template: '<a href="javascript:;" (click)="remove()">Remove</a>',
})
export class RemoveItemComponent  {

  @Input() product:Product;
  
  constructor(private cartService:CartService) { }


  remove(){
    this.cartService.remove(this.product);
  }

}
