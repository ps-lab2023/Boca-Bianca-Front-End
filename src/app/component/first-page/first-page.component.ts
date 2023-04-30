import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {UserService} from "../../services/User-Service";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
@Injectable()
export class FirstPageComponent implements OnInit {

  userList:User[] = [];
  user2:User | undefined;
  ownerList:any;
  updateForm:FormGroup | undefined;
  myInputEmail: string='';
  myInputPassword: string='';
  currentUser: User | undefined;



  constructor(private useService:UserService,
    private formBuilder:FormBuilder,
    private user:User,
    @Inject(Router) private router: Router,
    ) { }


  ngOnInit(): void {
    this.currentUser=this.useService.getCurrentUser();
  // this.useService.findAllUser().subscribe();

  //  this.masinaService.deleteUser(1).subscribe();
   // this.masinaService.("Logan").subscribe();

    this.initOwnerCarsForm();
    
    // console.log(  this.useService.findAllUser().subscribe());
  }

  
  initOwnerCarsForm(){
    this.updateForm=this.formBuilder.group({
      ownerInput:[null, Validators.required],
      carInput:[null,Validators.required],
      
    })
  }

  
  verifying() {
    this.useService.loginFCT(this.myInputEmail,this.myInputPassword).subscribe();
  
  }
  clearUp()
{
  this.myInputEmail="";
  this.myInputPassword="";
}

  login() {
    this.useService.loginFCT(this.myInputEmail, this.myInputPassword)
  .subscribe((res: any) => {
    // console.log(res);
    this.user2 = res as User; // cast the result to User
    this.useService.setCurrentUser(this.user2);
    // console.log(this.currentUser);
    if (res === null) {
      alert("Username or password incorrect!");

    }
  }, (error: any) => {
    alert("Username or password incorrect!");
  });


    };
           
  

  btnClick=  () => {
    this.router.navigate(["/first-page"]);
  }
  btnClick2=  () => {
    this.router.navigate(["/seven-page"]);
  }
  
}
