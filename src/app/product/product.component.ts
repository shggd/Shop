import { Product } from './../models/product.model';
import { ProductService } from './product.service';
import { Router ,ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
declare var $:any;


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productarray:Product[];
  totalPage:number[];
  currentPage:number;
  maxPage:number;



  rendering:boolean = false;

  constructor(private router:Router, private activeRoute:ActivatedRoute, private productservice:ProductService) {
   }

  ngOnInit() {
      this.activeRoute.queryParams.subscribe(params=>{
        const page:number = params['page']?params['page']:1;
        const sort:string = params['sort_by']?params['sort_by']:'';
        this.renderPage(page,sort);
      })
  }

  gotoPage(page:number){
    this.router.navigate(['/product'],{queryParams:{page:page},queryParamsHandling: "merge" })
  }

  change(value:string){
    this.router.navigate(['/product'], { queryParams: { 'sort_by': value },  queryParamsHandling: "merge" });

  }

  renderPage(page:number, sort:string){
    this.rendering = true;
    window.scrollTo(0, 100);
    this.productservice.getProduct(page,sort)
    .subscribe(
      data=>
      {
        this.productarray=data.products; 
        this.totalPage = Array(data.totalPage).fill(1).map((x,i)=>i+1);
        this.maxPage = this.totalPage.length;
        this.currentPage = data.currentPage;
        this.rendering = false;
      },
      error=>console.log("ITS ERROR"))
  }
}
