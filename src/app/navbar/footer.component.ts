import { CartService } from './../services/cart.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor(private cartservice:CartService) { }

  ngOnInit() {
  }

  ngOnDestroy(){    
  }

}
