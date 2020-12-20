import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cartservices/cart.service';
import {Cart} from '../cart';
import {Product} from '../../product/product/product';
import {ProductsService} from '../../../services/product-services/products.service';

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

  constructor(
    private cartSercice: CartService,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
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

}
