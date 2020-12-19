import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../../components/cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartAddService {

  constructor(private http: HttpClient) { }

  addToCart(newCart: Cart) {

    return this.http.post<Cart>('http://localhost:8080/api/carts/newCart', newCart);
  }
}
