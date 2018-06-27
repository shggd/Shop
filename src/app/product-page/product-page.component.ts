import { ProductService } from './../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product:Product;
  pageId:string;
  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.activatedRoute.params.subscribe(params=>{
      this.render(params['id'])
    });

   
  }

  render(id){
    $('.materialboxed').materialbox();
    this.pageId = id;
    this.productService.get(this.pageId).subscribe(
      data=>{this.product=data},
      error=>this.router.navigateByUrl('404')
    )
  }

  

}
