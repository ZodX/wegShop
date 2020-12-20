import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cartservices/cart.service';
import {Cart} from '../cart';
import {Product} from '../../product/product/product';
import {ProductsService} from '../../../services/product-services/products.service';
import {Order} from "../order";
import {CartOrderService} from "../../../services/cartservices/cart-order.service";
import {User} from "../../authentication/User";

@Component({
  selector: 'app-cartholder',
  templateUrl: './cartholder.component.html',
  styleUrls: ['./cartholder.component.css']
})
export class CartholderComponent implements OnInit {

  cartItems: Cart[] = [];
  products: Product[] = [];
  totalprice = 0;
  fetchDone: boolean;
  username: string;
  orderCount: ArrayBuffer;

  constructor(
    private cartSercice: CartService,
    private productService: ProductsService,
    private cartOrderService: CartOrderService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
    this.username = sessionStorage.getItem("authenticatedUser");
  }

  getCartItems(): void {
    this.cartSercice.getItems().subscribe( (result) => {

      for (let cart of result) {
        if (cart.username === sessionStorage.getItem('authenticatedUser')) {
          this.cartItems.push(cart);
        }
      }

      console.log(this.cartItems.length);

      for (let cart of this.cartItems) {
        this.productService.productById(cart.product_id).subscribe( (result) => {
          this.products.push(result);
          this.totalprice += result.price;
        });
      }

      this.fetchDone = true;
    });
  }

  handleOrderNow(): void   {
    let user = new User();
    user.username = this.username;

    this.cartOrderService.getUserOrderCount(user).subscribe( (result) => {
      this.orderCount = result + 1;
      console.log(this.orderCount);
      user.order_counter = this.orderCount;

      for (let item of this.cartItems) {
        let order = new Order();
        order.order_number = this.orderCount;
        order.product_id = item.product_id;
        order.username = item.username;

        this.cartOrderService.addOrder(order).subscribe();
      }

      this.cartOrderService.incOrderNumber(user).subscribe();
    });
  }

}
