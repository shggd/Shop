import { NavbarService } from './../services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit,OnDestroy {

  constructor(private navService:NavbarService) {
    window.scrollTo(0, 100);
    this.navService.hide();
   }

  ngOnInit() {
  }



  ngOnDestroy(){
    this.navService.show();
  }

}
