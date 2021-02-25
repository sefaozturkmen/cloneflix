import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {

  constructor(private router: Router) { }

  registeredUserList: User[] = [];
  registeredUserListFromLS: User[] = [];
  loggedIn = false;

  ngOnInit(): void { }

  //add user value to the list then add list to LS
  register(user: any) {
    this.registeredUserList.push({ ...user });
    localStorage.setItem("registeredUserList", JSON.stringify(this.registeredUserList))
  }

  //call the userList from LS
  login(user: User): boolean {
    const registeredUserList: any = localStorage.getItem("registeredUserList")
    this.registeredUserListFromLS = JSON.parse(registeredUserList)
    //comparing the list and user value
    var i;
    for (i = 0; i < this.registeredUserListFromLS.length; i++) {
      if (this.registeredUserListFromLS[i].username === user.username && this.registeredUserListFromLS[i].password === user.password) {
        this.loggedIn = true;
        this.router.navigate(["home"])
        return true
      }
    }
    alert('Kullanıcı Bulunamadı')
    return false
  }

  //return the loggedIn value
  isLoggedIn() {
    return this.loggedIn;
  }

  //logout function
  logOut() {
    this.loggedIn = false;
  }

}
