import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit,OnDestroy {

  constructor() {
    window.scrollTo(0, 100);
   }

  ngOnInit() {
  }



  ngOnDestroy(){
  }

}
