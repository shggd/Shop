import { CartService } from './../services/cart.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(private cartService:CartService, private r:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
    if(!this.cartService.isEmpty()){
      return true;
    }
    else{
      this.r.navigate(['/cart']);   
      return false;
    }
  }


}
