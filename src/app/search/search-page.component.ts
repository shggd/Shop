import { Product } from './../models/product.model';
import { ProductService } from './../product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  keyword:string;
  products:Product[] = [];
  constructor(private router:Router, private activeRoute:ActivatedRoute, private productservice:ProductService) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params=>{
      this.keyword = params['keyword']?params['keyword']:null;
      this.search(this.keyword);
    })
  }

  search(keyword:string){
    this.productservice.search(keyword).subscribe(
      data=>{this.products = data;},
      error=>{console.log(error)}
    );
  
  }

}
