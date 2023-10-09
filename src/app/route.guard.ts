import { AuthenticationService } from 'src/app/authentication.service';
import { CartService } from './cart.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {

let _Router =inject(Router)
let auth=inject(AuthenticationService)
 if(localStorage.getItem('token')!==null){

  return true;
 }else{
auth.isLogin.next(false)
    _Router.navigate(['/login'])

    return false;
 }

};
