import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from './../models/cart.model';
import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  private cart:Cart;
  private notfound:Boolean= false;
  private result:Boolean = false;
  private ordernum:number;

  constructor(private reqestService:RequestService, private activeRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(param=>{
      this.ordernum= param["ordernum"]?param["ordernum"]:null;
      if(this.ordernum){
        this.open(this.ordernum);
      }
    })     
  }



  open(num){
    this.router.navigate(['/orderstatus'],{queryParams:{ordernum:num}});
    this.reqestService.getOrder(num).subscribe(
      res=>{this.result=true,this.notfound=false,this.cart=res.data;},
      error=>{this.notfound=true,this.result=false}
    );
  }
}
