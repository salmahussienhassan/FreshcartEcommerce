import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branddetailes',
  templateUrl: './branddetailes.component.html',
  styleUrls: ['./branddetailes.component.scss']
})
export class BranddetailesComponent implements OnInit{


  brand:any;
  constructor (private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
   
    let pathId=this._ActivatedRoute.snapshot.params?.['id']


    this._ProductService.getSpesificBrand(pathId).subscribe({
      next:(res)=>{
       this.brand=res.data
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
    
  }

  
}
