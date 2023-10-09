import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  isLoading:boolean=false;
  errorMessage:string=''
  
  
  constructor(public _AuthenticationService:AuthenticationService,public _Router:Router){
  
  }
  
    loginForm=new FormGroup({
      
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)])
     
    })
  
  login(form:any){
    this.isLoading=true
    if(form.valid ){
     
      console.log(form.value)
      this._AuthenticationService.login(form.value).subscribe({
        next:(response)=>{
          localStorage.setItem('token',response.token) //lazem n7t de 2ol 7aga

          this._AuthenticationService.isLogin.next(true)
          this.isLoading=false
          this.errorMessage=response.message
          this._Router.navigate(['/home'])
         
          console.log(response);
        },
        error:(err)=>{
          this.isLoading=false
          // this.errorMessage=err.error.message
          // console.log(err)
        },
        complete:()=>{console.log('done') }
          
  
        })
      }
    
    
    else{
   
      console.log('invalid');
      
    }
  
  
  }

}
