import { Injectable } from '@angular/core';
import {Cart} from "../../components/cart/cart";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartDeleteService {

  constructor(private http: HttpClient) { }

  deleteCart(newCart: Cart) {
    return this.http.delete('http://localhost:8080/api/carts/delete/' + newCart.username + '-' + newCart.product_id);
  }
}
