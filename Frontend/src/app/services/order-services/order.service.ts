import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../components/authentication/User";
import { Order } from "../../components/cart/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Order[]>('http://localhost:8080/api/orders/getMyOrders');
  }
}
