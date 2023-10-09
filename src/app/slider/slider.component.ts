import { Category } from './../category';
import { Component ,Input} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() productCategory:Category[]=[];
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
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 1000, // Set autoplay interval (in milliseconds)
    autoplayHoverPause: true // Pause autoplay when hovering over the carousel
  };
}
