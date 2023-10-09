import { User } from './../user';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.scss']
})
export class AllorderComponent implements OnInit{

orderArr:any=[];


constructor( private _CartService:CartService){

}
ngOnInit(): void {
  let id:any
this._CartService.getLogedUserCart().subscribe({
  next:(response)=>{
id=response.data.cartOwner
this._CartService.getUserOrder(id).subscribe({
  next:(res)=>{
    this.orderArr=res
    console.log(res)

  },
  error:(err)=>{
    console.log(err)
  }
  
})

  }
})

  
}

}
