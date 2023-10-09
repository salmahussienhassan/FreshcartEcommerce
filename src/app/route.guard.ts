import { CartService } from './cart.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {

let _Router =inject(Router)
// let _CartService =inject(CartService)


 if(localStorage.getItem('token')!==null){
//    let cart:any=localStorage.getItem('cart')
// _CartService.numOfCartItems.next(cart)
  return true;
 }else{
  //  _CartService.numOfCartItems.next(0)
    _Router.navigate(['/login'])
    return false;
 }

};
