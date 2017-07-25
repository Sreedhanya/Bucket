import { Injectable } from '@angular/core';
import {User} from './user';
import {Http } from '@angular/http';
import "rxjs";
@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  getUser(user: User)
  {
    console.log("user is"+user.name);
return this._http.get('/dashboard',user).map(data=>data.json()).toPromise();
  }
  add(user:User)
  {
   return this._http.post('/dashboard',user).map(data=>data.json()).toPromise(); 
  }
  showAll(user:User)
  {
    return this._http.get('/lists',user).map(data=>data.json()).toPromise();
  }

}
