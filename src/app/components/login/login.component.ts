import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private accountService: AccountService) { }

  ngOnInit(): void {
  }
  showLoginPassword: string = 'password';
  loginPasswordToogle: Boolean = false;

  onLoginPasswordChecked() {
    if (this.loginPasswordToogle) {
      this.showLoginPassword = 'password';
      this.loginPasswordToogle = false
    } else {
      this.showLoginPassword = 'text';
      this.loginPasswordToogle = true
    }
  }


  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3,24}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3,24}$')]),
  });
  get registerUsername() {
    return this.registerForm.get('username');
  }
  get registerPassword() {
    return this.registerForm.get('password');
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3,24}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3,24}$')]),
  });


  register() {
    this.accountService.register(this.registerForm.value)
  }

  login() {
    this.accountService.login(this.loginForm.value)
  }
}
