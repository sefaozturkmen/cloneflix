import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {
 
  constructor(private router: Router) { }

  registeredUserList: User[] = [];

  loggedIn = false;
  ngOnInit(): void {}
  
  register(user: any) {
    this.registeredUserList.push({ ...user });
    console.log(this.registeredUserList)
    localStorage.setItem("registeredUserList", JSON.stringify(this.registeredUserList))
  }


  registeredUserListFromLS: User[] = [];
  login(user: User): boolean {
    const registeredUserList: any = localStorage.getItem("registeredUserList")
    this.registeredUserListFromLS = JSON.parse(registeredUserList)
    var i;
    for (i = 0; i < this.registeredUserListFromLS.length; i++) {
      if (this.registeredUserListFromLS[i].username === user.username && this.registeredUserListFromLS[i].password === user.password) {
        console.log('work')
        console.log(this.loggedIn)
        this.loggedIn = true;
        console.log(this.loggedIn)
        this.router.navigate(["home"])
        return true
      }
    }
    return false
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut(){
    this.loggedIn =false;
  }

}
