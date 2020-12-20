import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../components/authentication/User";
import {Order} from "../../components/cart/order";

@Injectable({
  providedIn: 'root'
})
export class CartOrderService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order) {
    return this.http.post<Order>('http://localhost:8080/api/orders/newOrder', order);
  }

  getUserOrderCount(user: User) {
    return this.http.post<User>('http://localhost:8080/api/users/getOrderCounter/' + user.username, user);
  }

  incOrderNumber(user: User) {
    return this.http.put<User>('http://localhost:8080/api/users/incOrderCounter/' + user.username, user);
  }
}
