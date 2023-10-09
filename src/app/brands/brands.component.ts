import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Brand} from '../product'
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{


  constructor(private _ProductService:ProductService,private viewportScroller: ViewportScroller){}

allBrands:Brand[]=[];
isLoading:boolean=false

  ngOnInit(): void {
    this.isLoading=true
    this._ProductService.getAllBrands().subscribe({

      next:(res)=>{
        this.isLoading=false
        this.allBrands=res.data
        console.log(this.allBrands)
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
