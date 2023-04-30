import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../model/User";
import { Product } from '../model/Product';
import { Order} from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL:string="http://localhost:8081/order";
  ownerDataStream:any;
  orderList:Order[] | undefined;
  product: Product | undefined; 

  constructor(
    private httpClient:HttpClient) {
    this.ownerDataStream=new BehaviorSubject<any>(null);
  
}


}
