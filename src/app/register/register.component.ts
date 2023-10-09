import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

isLoading:boolean=false;
errorMessage:string=''


constructor(public _AuthenticationService:AuthenticationService,public _Router:Router){

}

  registerForm=new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]) ,
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
    rePassword:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[10245][0-9]{8}$/)])
  })

signUp(form:any){
  this.isLoading=true
  if(form.valid && form.get('password').value== form.get('rePassword').value){
   
    console.log(form.value)
    this._AuthenticationService.signUp(form.value).subscribe({
      next:(response)=>{
        this.isLoading=false
        this.errorMessage=response.message
        this._Router.navigate(['/login'])
        console.log(response);
      },
      error:(err)=>{
        this.isLoading=false
        this.errorMessage=err.error.message
        console.log(err)
      },
      complete:()=>{console.log('done') }
        

      })
    }
  
  
  else{
 
    console.log('invalid');
    
  }


}
}