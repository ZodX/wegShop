import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order-services/order.service";
import { Order } from "../../cart/order";
import {User} from "../../authentication/User";

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  myOrders: Order[];
  username: string;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("authenticatedUser");
    this.getMyOrders();
  }

  getMyOrders(): void {
    let user = new User();
    user.username = this.username;

    this.orderService.getAllOrders(user).subscribe( (result) => {
      this.myOrders = result;
      console.log(this.myOrders);
    })

    // this.orderService.getAllOrders(this.username).subscribe((result) = > {
    //   this.myOrders = result;
    // });
  }

}
