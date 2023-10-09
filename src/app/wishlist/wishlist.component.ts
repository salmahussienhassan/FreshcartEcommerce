import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{

  whishlistItems:any=[]

constructor(private _WishlistService:WishlistService,private viewportScroller:ViewportScroller,private toastr: ToastrService){

}

ngOnInit(): void {
this._WishlistService.getloggedUserwishlist().subscribe({
  next:(response)=>{
    this.whishlistItems=response.data
    console.log(response)
  },
  error:(err)=>{
    console.log(err)
  }
})
  
}
scrollToTop() {
  this.viewportScroller.scrollToPosition([0, 0]);
}

removeItem(pId:any){
  this._WishlistService.removeproductfromwishlist(pId).subscribe({
    next:(response)=>{

      this._WishlistService.getloggedUserwishlist().subscribe({
        next:(response)=>{
          this.whishlistItems=response.data
         
        }})
        
     this._WishlistService.wishlistCount.next(response.data.length)
      console.log(response.data)
      this.toastr.error(response.message);
   
    },
    error:(err)=>{
      console.log(err)
    }
  })
}


}
