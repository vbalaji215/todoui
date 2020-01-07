import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  // Need Instance of the ROUTER
  // Use Dependency Injection by passing it as an argument in the constructor
  // The constructor argument is available to the component
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.username === 'balaji' && this.password === 'balaji') {
      this.invalidLogin = false;
      // Redirect the user to Welcome Page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
