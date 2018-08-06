import { Router } from '@angular/router';
import { Cart } from './../models/cart.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


// declare var $:any;
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit ,OnDestroy {

  item:number;
  elem:Object;
  dropdown:any;
  constructor(private cartService:CartService, private r:Router) {

       
  }
  ngOnInit() {
    this.materalizeInit();
    this.cartService.get().subscribe(data=>this.item= data.getTotalItem());
  }

  changeRoute(name:string){
    var instance = M.Sidenav.getInstance(this.elem); 
    instance.close();
    this.r.navigateByUrl(name);
  }

  materalizeInit(){
    M.AutoInit();
    this.elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(this.elem, {});
    document.addEventListener('DOMContentLoaded', ()=> {
       this.dropdown = document.querySelectorAll('.dropdown-trigger');
       var instances = M.Dropdown.init(this.dropdown, {coverTrigger:false,constrainWidth:false});
    });    
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("destoryed");
  }
  
}
