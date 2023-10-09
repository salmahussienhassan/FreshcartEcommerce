import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorydetailes',
  templateUrl: './categorydetailes.component.html',
  styleUrls: ['./categorydetailes.component.scss']
})
export class CategorydetailesComponent implements OnInit{

  constructor(private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute){

  }
  isLoading:boolean=false
catDetailes:any
subCat:any

ngOnInit(): void {
  this.isLoading=true
  let pathId=this._ActivatedRoute.snapshot.params?.['id']

 this._ProductService.getSpesificCat(pathId).subscribe({

next:(res)=>{
  this.isLoading=false
this.catDetailes=res.data
console.log(this.catDetailes)
  
},
error:(err)=>{
  console.log(err)
}
 })
  
 this._ProductService.getSubCat(pathId).subscribe({
  next:(res)=>{
    this.subCat=res.data
  console.log(res)
    
  },
  error:(err)=>{
    console.log(err)
  }

 })
}
}
