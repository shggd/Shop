import { ProductService } from './../product/product.service';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  private products:Product[];

  constructor(private productService:ProductService) {window.scroll(0,0); }

  ngOnInit() {
    this.productService.getRandom().subscribe(data=>{
      this.products=data;
    },
    error=>{console.log(error)})
  }


}
