import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productdetailes',
  templateUrl: './productdetailes.component.html',
  styleUrls: ['./productdetailes.component.scss']
})
export class ProductdetailesComponent implements OnInit {

detailes:any;
img:any
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], // Navigation arrows

  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: true,
  autoplay: true, // Enable autoplay
  autoplayTimeout: 900, // Set autoplay interval (in milliseconds)
  autoplayHoverPause: true // Pause autoplay when hovering over the carousel
};
  constructor(public _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    //هنا بجيب الاي دي اللي خدته من اليو ار ال فلازم اكتب الاي دي بنفس الاسم اللي كتبته في اليو ار ال
   let pathId=this._ActivatedRoute.snapshot.params?.['id']

    this._ProductService.getProductDetailes(pathId).subscribe(
      {
        next:(response)=>{
         
        this.detailes=response.data
        this.img=response.data.images
        console.log(this.img)
        },
        error:(err)=>{err},
        complete:()=>{console.log('done');
        }
      }
    )
  }

}
