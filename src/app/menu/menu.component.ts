import { Component, OnInit } from '@angular/core';
import {BasicAuthService} from '../service/auth/basic-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn = false;
  constructor(public authenticator: BasicAuthService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.authenticator.isUserLoggedIn();
  }

}
