import { CartItem } from './../models/cart-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracking-result',
  templateUrl: './tracking-result.component.html',
  styleUrls: ['./tracking-result.component.css']
})
export class TrackingResultComponent implements OnInit {

  @Input()item:CartItem;

  constructor() { }

  ngOnInit() {
    
  }

}
