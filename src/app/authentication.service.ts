import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLogin=new BehaviorSubject(false)



  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if( localStorage.getItem('token')!==null){
      this.isLogin.next(true)
     
      
    }
    else{
      this.isLogin.next(false)
    }
  }

  signUp(data:User):Observable<any>{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }

  
  login(data:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
      }

      logout(){
        this.isLogin.next(false)
        localStorage.removeItem('token')
       
        localStorage.removeItem('userId')
        this._Router.navigate(['/login'])
       
     
      }


forgetPassword(data:any):Observable<any>{

  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)
}

verifyResetCode(data:any):Observable<any>{

  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
}

resetPassword(data:any):Observable<any>{
  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
}


changePassword(data:any):Observable<any>{
  let headers :any= {

      token: localStorage.getItem('token')
    }
  
    console.log(headers);

  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',
data,{headers : headers})
}


}





