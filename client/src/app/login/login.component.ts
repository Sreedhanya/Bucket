import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import{ UserService} from  './../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private _router:Router) { }

  ngOnInit() {
  }
user=new User();

acceptUser()
{
  
 this.userService.getUser(this.user).then(()=>this._router.navigate(['/dashboard'])).catch(()=>this._router.navigate(['/dashboard'])); 
console.log("user is"+this.user.name);
 this.user=new User();
}
}
