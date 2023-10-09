import { Product } from './../product';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

cartArray:any=[];
totalPrice:number=0
cartId:any=''
constructor(private _CartService:CartService,private toastr: ToastrService){

}
 
ngOnInit(): void {
this._CartService.getLogedUserCart().subscribe({

  next:(res)=>{
this.cartId=res.data._id
    this.totalPrice=res.data.totalCartPrice
    this.cartArray=res.data.products
    console.log(res)
    console.log(this.cartArray)
  },
  error:(err)=>{
    console.log(err)
  }
})
  
}
clearCart(){
  this._CartService.clearCart(this.cartArray).subscribe({
    next:(res)=>{
     
      this.cartArray.length=0
      this.totalPrice=0
      this._CartService.numOfCartItems.next(0)
     console.log(res)
     this.toastr.error('All Item deleted !');
    },
  error:(err)=>{
   console.log(err)
  }

  })
}
deleteItem(id:any){
  this._CartService.removeSpecificCartItem(id).subscribe({
    next:(res)=>{
      
      this.totalPrice=res.data.totalCartPrice
      this._CartService.numOfCartItems.next(res.numOfCartItems)
      this.cartArray=res.data.products
      this.toastr.error('Item deleted !');

    },
  error:(err)=>{
   console.log(err)
  }
})
}

updatedCount(id:any,count:any){

  this._CartService.updateProductCount(id,count).subscribe(
    {
      next:(res)=>{
          this.cartArray=res.data.products
        this.totalPrice=res.data.totalCartPrice
       console.log(res)
 
      
      },
    error:(err)=>{
     console.log(err)
    }
    }
  )
}

}
