import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService {

  currentUser:Observable<any>;
  constructor(private http:Http) { }
  

  getProduct(page:number, sort:string){//get ALL
    return this.http.get(`http://localhost:3000/product?page=${page}&&sort_by=${sort}`)
      .map(res=>res.json())
      .catch(this.error);
  }

  search(keyword:string){
    return this.http.get(`http://localhost:3000/product/search?keyword=${keyword}`)
      .map(res=>res.json())
      .catch(this.error);
  }

  get(id){//get One
    return this.http.get(`http://localhost:3000/product/${id}`)
      .map(res=>res.json())
      .catch(this.error);
  }

  getRandom(){
    return this.http.get(`http://localhost:3000/product/get/random`)
    .map(res=>res.json())
    .catch(this.error);
  }

  private error(error:any){
    return Observable.throw(error.json());
  }
}
