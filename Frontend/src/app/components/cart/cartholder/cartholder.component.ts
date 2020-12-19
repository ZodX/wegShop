import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cartservices/cart.service";
import {Cart} from "../cart";
import {Product} from "../../product/product/product";
import {ProductsService} from "../../../services/product-services/products.service";

@Component({
  selector: 'app-cartholder',
  templateUrl: './cartholder.component.html',
  styleUrls: ['./cartholder.component.css']
})
export class CartholderComponent implements OnInit {

  cartItems: Cart[] = [];
  products: Product[] = [];

  constructor(
    private cartSercice: CartService,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartSercice.getItems().subscribe( (result) => {
      this.cartItems = result;

      for (let cart of result) {
        this.productService.productById(cart.product_id).subscribe( (result) => {
          this.products.push(result);
        });
      }
    });
  }

}
