import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/User-Service';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.css']
})
export class SixthPageComponent implements OnInit {

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
