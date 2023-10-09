import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject<number>=new BehaviorSubject(0)


  constructor(private _HttpClient:HttpClient) { }

  addProductToCart(productId:any):Observable<any>{
// let header:any={token:localStorage.getItem('token')}

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId:productId}
    // ,{
    //   headers:header
    // }
    )}


getLogedUserCart():Observable<any>{

  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
}

clearCart(data:any):Observable<any>{

  return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',data)
}


removeSpecificCartItem(id:any):Observable<any>{

  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
}

updateProductCount(id:any,count:any):Observable<any>{

  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count})
}

onlinePayment(cartId:any,shippingAddress:any):Observable<any>{

  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://freshcart-ecommerce.vercel.app`,{shippingAddress:shippingAddress})



}

getUserOrder(id:any):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
}

}




