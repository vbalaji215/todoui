import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid User Credentials';
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.username === 'balaji' && this.password === 'balaji') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
