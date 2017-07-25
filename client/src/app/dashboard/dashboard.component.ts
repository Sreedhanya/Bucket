import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService } from './../user.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user=new User();
lists=[];
  constructor(private userService: UserService ,private _router:Router){ }

  ngOnInit() {
  }
addBucket()
{

this.userService.add(this.user).then(()=>this._router.navigate(['/dashboard'])).catch(()=>this._router.navigate(['/dashboard']));
this.userService.showAll(this.user).then(user=>{this.lists=user}
).catch(()=>{console.log("error while retrieving")})
}
}
