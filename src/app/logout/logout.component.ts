import { Component, OnInit } from '@angular/core';
import {BasicAuthService} from '../service/auth/basic-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticator: BasicAuthService) { }

  ngOnInit() {
    this.authenticator.logout();
  }

}
