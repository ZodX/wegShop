import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid user name or password.'
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log("LOGIN HANDLING");
    this.authenticationService.authenticationService(this.username, this.password).subscribe(() => {
      console.log("SUCCESS!");
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      console.log("SET!");
      this.router.navigate(['/main']);
      console.log("NAVIGATED!");
    }, () => {
      console.log("ERROR!");
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
