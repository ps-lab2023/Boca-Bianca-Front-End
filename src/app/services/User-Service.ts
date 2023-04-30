import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string="http://localhost:8081/user";
  ownerDataStream:any;
  currentUser:any;

  constructor(private httpClient:HttpClient) {
    this.ownerDataStream=new BehaviorSubject<any>(null);
  }

  // findAllUser(){
  //   return this.httpClient.get(this.baseURL+"/all");
  // }

  // deleteUser(id:number){
  //   return this.httpClient.delete(this.baseURL+"/delete"+id);
  // }

  // public loginFCT(adresaEmail:any, parola:any): any
  // {
  //   let credentials = {adresaEmail:adresaEmail ,parola:parola};
  //   return this.httpClient.post('http://localhost:8081/user/login',
  //     JSON.stringify(credentials) ,{headers:{'Content-Type':'application/json'},observe:'response'});
  // }
  loginFCT(email: string,pass:string) {
    return this.httpClient.get(this.baseURL + "/loginUser?email="+email+"&password="+pass);
   }

  submitFunction(user:User,plangere:String)
  {
    let credentials={ user:User, plangere:String}
    return this.httpClient.post(this.baseURL+"/submit?user="+user+"&plangere="+plangere,JSON.stringify(credentials)).subscribe(
    (response) => {
              console.log("submit successful");
              console.log(response);
          },
          (error) => {
              console.log("submit error");
              console.log(error);
          }
      );
  }

  registerFCT(prenumeClient: string, numeClient: string, number: string, adresa: string, adresaEmail: string, parola: string) {
    const credentials = { prenumeClient, numeClient, number, adresa, adresaEmail, parola };
    return this.httpClient.post(this.baseURL + "/registerUser?prenume=" + prenumeClient + "&nume=" + numeClient + "&number=" + number + "&Adress=" + adresa + "&email=" + adresaEmail + "&password=" + parola, JSON.stringify(credentials)).subscribe(
      response => {
        console.log("register successful");
        console.log(response);
      },
      error => {
        console.log("register error");
        console.log(error);
      }
    );
  }

    setCurrentUser(user: any) {
      this.currentUser = user;
    }
  
    getCurrentUser() {
      return this.currentUser;
    }
  




  
}
