import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/User-Service';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  myInputEmail: string='';
  myInputPassword: string='';
  myInputAddress: string='';
  myInputNumber: string='';
  myInputFirstName: string='';
  myInputSecondName: string='';
  currentUser:User|undefined;
  constructor(
    private userService:UserService, 
    private router:Router) { }

  ngOnInit() {
    this.currentUser=this.userService.getCurrentUser();

  }

  btnClick=  () => {
    this.router.navigate(["/first-page"]);
  }

  btnClick2=  () => {
    this.router.navigate(["/seven-page"]);
  } 
}
