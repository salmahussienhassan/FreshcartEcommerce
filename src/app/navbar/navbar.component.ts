import { WishlistService } from './../wishlist.service';
import { CartService } from './../cart.service';
import jwtDecode from 'jwt-decode';
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
userName:string=''
userData:any
localstorageToken:any
 enableNavbar:boolean=false;
cartItems:number=0
whishlistItems:number=0


constructor(public _AuthenticationService:AuthenticationService,public _CartService:CartService ,private viewportScroller: ViewportScroller,private _WishlistService:WishlistService){

}
ngOnInit(): void {
 this._AuthenticationService.isLogin.subscribe((val)=>{
  if(localStorage.getItem('token')!==null){
   
    this.localstorageToken=localStorage.getItem('token')
    this.userData=jwtDecode(this.localstorageToken)
    this.userName=this.userData.name
    this._CartService.getLogedUserCart().subscribe({
      next:(res)=>{
        this.cartItems=res.numOfCartItems
      }
      
    })

    this._WishlistService.getloggedUserwishlist().subscribe({
      next:(res)=>{
        this.whishlistItems=res.data.length
      }
      
    })

      

  }

  this.enableNavbar=val
 })
  
this._CartService.numOfCartItems.subscribe(
  (val)=>{
    this.cartItems=val
  }
)
this._WishlistService.wishlistCount.subscribe(
  (val)=>{
    this.whishlistItems=val
  }
)

}

makeLogout(){
  this.enableNavbar=false
 this._AuthenticationService.isLogin.next(false)
  this._AuthenticationService.logout()
}

scrollToTop() {
  this.viewportScroller.scrollToPosition([0, 0]);
}
}
