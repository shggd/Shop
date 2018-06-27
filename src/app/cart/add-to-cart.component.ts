import { Product } from './../models/product.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
// declare var Materialize:any;
import * as M from 'materialize-css';

@Component({
  selector: 'app-add-to-cart',
  template: '<button class="btn" (click)="add()">Add To Cart</button>',
})
export class AddToCartComponent implements OnInit {

  @Input() product:Product;
  
  
  constructor(private cartService:CartService) {
    

   }

  ngOnInit() {
  
  }

  add(){
    if(this.cartService.add(this.product,1)){
      M.toast({html: 'Added to Cart!!!',displayLength:3000});    
    }
    else{
      M.toast({html: 'Out of Stock',displayLength:3000}); 
    }
  }
}
