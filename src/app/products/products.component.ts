import { CartService } from './../cart.service';
import { WishlistService } from './../wishlist.service';
import { Component, OnInit } from '@angular/core';
import{Product} from '../product';
import { ViewportScroller } from '@angular/common';
import { ProductService } from './../product.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:Product[]=[];
 isLoading:boolean=false
  word:string=''
  pageSize: number = 0;
  curentPage: number = 0;
  totalItem: number = 0;



  constructor(public _CartService:CartService,public _ProductService:ProductService,private viewportScroller: ViewportScroller,private _WishlistService:WishlistService,private toastr:ToastrService){
  
  }
  
  
  ngOnInit(): void {
  this.isLoading=true
   this._ProductService.getProducts().subscribe(
    {
      next:(Response)=>{
      this.isLoading=false
      this.productList=Response.data;
      this.pageSize = Response.metadata.limit;
      this.curentPage = Response.metadata.currentPage;
      this.totalItem = Response.results;
      console.log(this.productList.length)
  
      
      },
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('done')}
    }
   )
  

    
  }
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  pageChanged(pageNum: number): void {
    this.curentPage = pageNum;
    this._ProductService.getProducts(pageNum).subscribe({
      next: (response) => {
        this.productList = response.data;
        this.pageSize = response.metadata.limit;
        this.curentPage = response.metadata.currentPage;
        this.totalItem = response.results;
      },
    });
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
