import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardCodedAuthenticationService} from '../service/hard-coded-authentication.service';
import {BasicAuthService} from '../service/auth/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid User Credentials';

  // Need Instance of the ROUTER
  // Use Dependency Injection by passing it as an argument in the constructor
  // The constructor argument is available to the component
  constructor(private router: Router,
              private authenticator: HardCodedAuthenticationService,
              private basicAuth: BasicAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.authenticator.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      // Redirect the user to Welcome Page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    console.log(this.username);
    console.log(this.password);
    this.basicAuth.executeBasicAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }

}
