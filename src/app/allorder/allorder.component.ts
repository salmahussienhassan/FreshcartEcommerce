import { User } from './../user';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.scss']
})
export class AllorderComponent implements OnInit{

orderArr:any=[];
 id:any
userData:any
localstorageToken:any

constructor( private _CartService:CartService){

}
ngOnInit(): void {


  this.localstorageToken=localStorage.getItem('token')
    this.userData=jwtDecode(this.localstorageToken)
 this.id=this.userData.id
console.log(this.id)
this._CartService.getUserOrder(this.id).subscribe({
  next:(res)=>{
    this.orderArr=res
    console.log(res)

  },
  error:(err)=>{
    console.log(err)
  }
  
})

  }

}
