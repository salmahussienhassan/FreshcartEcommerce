import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { 

  }



  getProducts(pageNum: number = 1):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNum}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getProductDetailes(id:number):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products/'+id)
  }


  getAllBrands():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  getSpesificBrand(id:number):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands/'+id)
  }

  getAllCat():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  
  getSpesificCat(id:number):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories/'+id)
  }

  getSubCat(id:number):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories/'+id+'/subcategories')
  }
  }

