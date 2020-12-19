import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../../components/cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Cart[]>('http://localhost:8080/api/carts/getAllCarts');
  }
}
