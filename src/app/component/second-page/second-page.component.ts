import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/User-Service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {

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
