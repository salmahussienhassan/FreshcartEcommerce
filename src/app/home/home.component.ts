import { WishlistService } from './../wishlist.service';
import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import{Product} from '../product';
import{Category} from '../category';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { ToastrService } from 'ngx-toastr';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
 
productList:Product[]=[];
categoryList:Category[]=[];
word:string=''
isLoading:boolean=false



constructor(public _ProductService:ProductService,private viewportScroller: ViewportScroller,private _CartService:CartService,private toastr: ToastrService,private _WishlistService:WishlistService){

}

mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay: true,
  navSpeed: 700,
  navText: ['', ''],
  items: 1,
  nav: true,
};

ngOnInit(): void {

 this._ProductService.getProducts().subscribe(
  {
    next:(Response)=>{
    
    this.productList=Response.data;
    console.log(this.productList.length)

    
    },
    error:(err)=>{console.log(err)},
    complete:()=>{console.log('done')}
  }
 )

this._ProductService.getCategories().subscribe({
  next:(response)=>{this.categoryList=response.data},
  error:(err)=>{console.log(err)},
  complete:()=>{console.log('done')}

})
  
}
scrollToTop() {
  this.viewportScroller.scrollToPosition([0, 0]);
}
showSuccess() {
  this.toastr.success('Product Added Successfully To Your Cart ');
}

addProductToCart(pId:any){
this.isLoading=true

  this._CartService.addProductToCart(pId).subscribe({

    next:(response)=>{
      this.isLoading=false
    
      this._CartService.numOfCartItems.next(response.numOfCartItems)
    
    
      console.log(response)
      this.showSuccess()
      console.log(response.numOfCartItems)
    },
    error:(err)=>{console.log(err)},
    complete:()=>{console.log('done')}
  })


}

showMessage(msg:string) {
  this.toastr.success(msg);
}
addWishlist(pId:any){

  this._WishlistService.addProductToWishlist(pId).subscribe({
    next:(res)=>{
 
     
     this._WishlistService.wishlistCount.next(res.data.length)
     this.showMessage(res.message)
      console.log(res)
      
    },
    error:(err)=>{
      console.log(err)
    }
  })
  

}

}
