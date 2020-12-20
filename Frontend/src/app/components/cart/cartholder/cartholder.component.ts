import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cartservices/cart.service';
import {Cart} from '../cart';
import {Product} from '../../product/product/product';
import {ProductsService} from '../../../services/product-services/products.service';
import {Order} from "../order";

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

  constructor(
    private cartSercice: CartService,
    private productService: ProductsService
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

    for (let item of this.cartItems) {
      let order: Order = new Order();
      order.username = item.username;
      order.product_id = item.product_id;
    }


    if (this.username === 'admin') {
      window.alert("Admin cant add to cart.");
    } else {
      if (this.quantity < 1) {
        window.alert("Out of stock");
      } else {
        let cart: Cart = new Cart();
        cart.username = this.username;
        cart.product_id = this.id;
        this.quantity -= 1;


        let db = parseInt(document.getElementById("elementNumber").innerHTML);
        document.getElementById("elementNumber").innerHTML = (db + 1).toString();

        this.cartAddService.addToCart(cart).subscribe(() => {});
      }
    }
  }

}
