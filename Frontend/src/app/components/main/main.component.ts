import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/login/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.authenticationService.isUserLoggedIn())
      this.router.navigate(['/']);
  }

}
