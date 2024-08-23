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
    this.router.navigate(["books"]);
  }

  register() {
    this.router.navigate(["register"]);
  }
}
