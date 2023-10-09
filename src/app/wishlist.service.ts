import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

wishlistCount:BehaviorSubject<number>=new BehaviorSubject(0)

  addProductToWishlist(pId:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId:pId
    })
  }

  getloggedUserwishlist():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }

  removeproductfromwishlist(pId:any):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${pId}`)
  }

}
