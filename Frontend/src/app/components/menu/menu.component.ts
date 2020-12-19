import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/login/authentication.service";
import {CartService} from "../../services/cartservices/cart.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;
  db: number = 0;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu -> ' + this.isLoggedIn);

    if (this.isLoggedIn) {
      this.cartService.getItems().subscribe( (result) => {

        for (let cart of result) {
          if (cart.username === sessionStorage.getItem('authenticatedUser')) {
            this.db++;
          }
        }
      });
    }
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}
