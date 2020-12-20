import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toProducts(): void {
    this.router.navigate(['/products']);
  }

  toOrders(): void {
    this.router.navigate(['/myorders']);
  }
}
