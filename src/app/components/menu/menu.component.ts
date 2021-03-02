import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  isLogin(): Boolean {
   const isLogin:any = this.accountService.isLoggedIn()

   if(isLogin == 'true'){
     return true
   }
   return false
  }

  logOut() {
    this.accountService.logOut()
  }
}
