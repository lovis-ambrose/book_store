import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMsg: Array<String> = [];
  authRequest: AuthenticationRequest = {
    email: "",
    password: "",
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: () => {
        // todo save the token
        this.router.navigate(['books']);
    },
      error: (err) => {
        console.log(err);
      }
    });
  }

  register() {
    this.router.navigate(["register"]);
  }
}
