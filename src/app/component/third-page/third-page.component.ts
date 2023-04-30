import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {UserService} from "../../services/User-Service";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})

@Injectable()
export class ThirdPageComponent implements OnInit {
  updateForm:FormGroup | undefined;
  
  myInputEmail: string='';
  myInputPassword: string='';
  myInputAddress: string='';
  myInputPhone: string='';
  myInputName: string='';
  myInputUsername: string='';
  currentUser:User|undefined;

  constructor(private userService:UserService,
    private formBuilder:FormBuilder,
    private user:User,
    @Inject(Router) private router: Router,) { }

  ngOnInit() {
    this.currentUser=this.userService.getCurrentUser();

  }
  btnClick=  () => {
    this.router.navigate(["/first-page"]);
  }
  clearUp() {
    this.myInputEmail = "";
    this.myInputPassword = "";
    this.myInputAddress = "";
    this.myInputName = "";
    this.myInputPhone = "";
    this.myInputUsername = "";
  }
  
  register() {
    this.userService.registerFCT(
      this.myInputName,
      this.myInputUsername,
      this.myInputPhone,
      this.myInputAddress,
      this.myInputEmail,
      this.myInputPassword
    )
    
  }
  btnClick2=  () => {
    this.router.navigate(["/seven-page"]);
  }
}
