import { Category } from './../category';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{



  constructor(private _ProductService:ProductService,private viewportScroller: ViewportScroller){}

  allCat:Category[]=[]
isLoading:boolean=false

  ngOnInit(): void {
    this.isLoading=true
this._ProductService.getAllCat().subscribe({
  next:(res)=>{
    this.isLoading=false
   this.allCat=res.data
    console.log(this.allCat)
  },
  error:(err)=>{
    console.log(err)
  }
})
    
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
