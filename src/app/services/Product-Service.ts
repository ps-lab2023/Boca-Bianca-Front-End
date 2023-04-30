import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../model/User";
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL:string="http://localhost:8081/product";
  ownerDataStream:any;
  productList:Product[] | undefined;
  product: Product | undefined; 

  constructor(
    private httpClient:HttpClient) {
    this.ownerDataStream=new BehaviorSubject<any>(null);
  
}
  findAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL+"/findAll");
  }
  findAllProductsGender(gender:String): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL+"/findGender"+"?gender="+gender);
  }

  deleteProduct(id:number){
    return this.httpClient.delete(this.baseURL+"/delete"+id);
  }

  

  sorteazaCrescator(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL+"/OrderCrescator");
  }

  sorteazaDescrescator(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL+"/OrderDescrescator");
  }
  
  findByName(numeProdus:String):Observable<Product>{
    return this.httpClient.get<Product>(this.baseURL+"/findByName"+"?nume="+numeProdus);
  }

}
