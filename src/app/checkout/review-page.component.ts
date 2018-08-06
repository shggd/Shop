import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NavbarService } from './../services/navbar.service';
import { Router } from '@angular/router';
import { RequestService } from './../services/request.service';
import { Cart } from './../models/cart.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit,OnDestroy {

  private cart:Cart;

  constructor(private cartService:CartService, private requestService:RequestService, private r:Router,private nav:NavbarService) {
    window.scrollTo(0, 100);
   }

  ngOnInit() {
    this.cartService.get().subscribe(data=>{this.cart = data})
  }

  private Placeorder(){
      this.requestService.submitCart(this.cart).subscribe(
      data=>{
        if(data.success==true){
          this.cartService.destroyCart();
          this.r.navigate(['comfirmation/'+data.order.orderNumber])
        }
      },
      error=>console.log(error)
    );

  }

  ngOnDestroy(){
  }

}
