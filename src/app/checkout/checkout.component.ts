import { ActivatedRoute } from '@angular/router';
import { CartService } from './../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){

}

cartId :any=this._ActivatedRoute.snapshot.params?.['cartId']

checkoutForm=new FormGroup(
{
  detailes:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(16)]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[10245][0-9]{8}$/)]),  
  city:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(16)])
}
)

checkout(form:any){
  console.log(this.cartId)
if(form.valid){
  this._CartService.onlinePayment(this.cartId,form.value).subscribe(
    {
      next:(res)=>{
       
        this.redirectToLocation(res.session.url)
        console.log(res.session.client_reference_id)
        console.log(res)
      },
   error:(err)=>{
    console.log(err)
   }
    }
  )
}

  console.log(form.value)
}

redirectToLocation(url:any){
  location.href=url;
  this._CartService.numOfCartItems.next(0)
  localStorage.setItem('cart','0')
}


}
