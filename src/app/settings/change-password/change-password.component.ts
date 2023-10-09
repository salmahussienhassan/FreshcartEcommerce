import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

isLoading:boolean=false
isSuccess:boolean=false
errorMessage:string=''



  constructor(private _AuthenticationService:AuthenticationService){}

  changeForm=new FormGroup({
    currentPassword:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
    rePassword:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
  })

changePass(form:any){
this.isLoading=true
console.log(form)

  if(form.valid && form.get('password').value== form.get('rePassword').value ){
this._AuthenticationService.changePassword(form.value).subscribe({

  next:(res)=>{

    this.isSuccess=true
    this.isLoading=false
    console.log(res)
  },
  error:(err)=>{
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


}
