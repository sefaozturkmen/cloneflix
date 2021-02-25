import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { showValidationMessage } from 'src/app/utils/utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  showLoginPassword: string = 'password';
  loginPasswordToogle: Boolean = false;
  //error messages
  errorMessages: any = {
    required: 'Bu alan boş bırakılamaz.',
    error: 'Geçerli bir değer giriniz.',
    email: 'Geçerli bir e-posta adresi girmelisiniz.',
    passwordPattern: 'Şifreniz rakam, büyük, küçük harf ve en az 8 karakter içermelidir.',
    confirm: 'Şifreler aynı değil.'
  }

  //Toggle password show
  onLoginPasswordChecked() {
    if (this.loginPasswordToogle) {
      this.showLoginPassword = 'password';
      this.loginPasswordToogle = false
    } else {
      this.showLoginPassword = 'text';
      this.loginPasswordToogle = true
    }
  }

  // forms validations and patterns
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,24}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,24}$')]),
  });
  get registerUsername() {
    return this.registerForm.get('username');
  }
  get registerPassword() {
    return this.registerForm.get('password');
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,24}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,24}$')]),
  });
  get loginUsername() {
    return this.loginForm.get('username');
  }
  get loginPassword() {
    return this.loginForm.get('password');
  }

  //Calling the register function at accountService
  register() {
    showValidationMessage(this.registerForm);
    if (this.registerForm.invalid) return;
    this.accountService.register(this.registerForm.value)
    alert('Giriş yapıldı')
    this.registerForm.reset();
  }
  //Calling the register function at accountService

  login() {
    showValidationMessage(this.loginForm);
    if (this.loginForm.invalid) 
    return alert('geçersiz değer');
    this.accountService.login(this.loginForm.value)
    
  }


}
