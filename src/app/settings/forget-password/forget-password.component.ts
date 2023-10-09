import { Router } from '@angular/router';
import { FormGroup,FormControl ,Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  isLoading:boolean=false;
  isForget:boolean=true
  isVerfied:boolean=false
  isSendCode:boolean=false
errorMessage:string=''
emailValue:any=''


constructor(private _AuthenticationService:AuthenticationService,private _Router:Router){

}

resetForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)])
})


verifyCodeForm=new FormGroup({

  resetCode:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(6)])

})


forgetForm=new FormGroup({
  
  email:new FormControl(null,[Validators.required,Validators.email]),

})

forgetPassChange(form:any){
  this.isLoading=true
console.log(form)

if(form.valid){
  console.log('succes')
  this._AuthenticationService.forgetPassword(form.value).subscribe({

    next:()=>{
      this.isForget=false
      this.isVerfied=true
    this.isLoading=false
  
    },
  
    error:(err)=>{
      console.log(err.error.message)
      this.errorMessage=err.error.message
      this.isLoading=false
      console.log(err)
    }
  })
}
else{
  console.log('error')
}
}

verifyCode(form:any){
  this.isLoading=true
  console.log(form)

  if(form.valid){
   
    this._AuthenticationService.verifyResetCode(form.value).subscribe({
  
      
      next:()=>{

this.isVerfied=false
        this.isSendCode=true
  this.isLoading=false
      },
    
      error:(err)=>{
        this.isLoading=false
       
        this.errorMessage=err.error.message
       }
    })
  }
  else{
    console.log('there is error')
   }
}


resetPassword(form:any){

  this.isLoading=true
console.log(form)
  if(form.valid){
    this._AuthenticationService.resetPassword(form.value).subscribe({

    
      next:(response)=>{
        console.log(response)
      this.isLoading=false
  this._Router.navigate(['/home'])
      },
    
      error:(err)=>{
        console.log(err)
        this.isLoading=false
      }
    })
  }
 else{
  console.log('there is error')
 }

}


}
