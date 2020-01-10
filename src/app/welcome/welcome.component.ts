import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessage = '';
  errorMessage = '';
  // Activated Route
  constructor(private route: ActivatedRoute,
              private welcomeService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log('Get Welcome Message');
    // console.log(this.welcomeService.executeHelloWorldBeanService());
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      errorResponse => this.handleErrorResponse(errorResponse)
    );
    // console.log('Last Line of Welcome Message');
  }

  getWelcomeMessageWithParameter() {
    // console.log('Get Welcome Message');
    // console.log(this.welcomeService.executeHelloWorldBeanService());
    this.welcomeService.executeHelloWorldBeanServiceWithVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      errorResponse => this.handleErrorResponse(errorResponse)
    );
    // console.log('Last Line of Welcome Message');
  }

  handleSuccessfulResponse(response) {
    console.log(response.helloMessage);
    this.welcomeMessage = response.helloMessage;
    // console.log(response);
  }

  handleErrorResponse(errorResponse) {
    // console.log(errorResponse);
    // console.log(errorResponse.error);
    console.log(errorResponse.error.message);
    this.errorMessage = errorResponse.error.message;
  }

}
