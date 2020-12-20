import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order-services/order.service";
import { Order } from "../../cart/order";
import {User} from "../../authentication/User";
import {Product} from "../../product/product/product";
import {ProductsService} from "../../../services/product-services/products.service";

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  orderCount: number = 0;
  myOrders: Order[] = [];
  orderProducts: Product[][] = [[]];
  username: string;
  allProducts: Product[];

  constructor(private orderService: OrderService,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.productService().subscribe( (result) => {
      this.allProducts = result;
      this.username = sessionStorage.getItem("authenticatedUser");
      this.getMyOrders();
    });
  }

  getMyOrders(): void {

    this.orderService.getAllOrders().subscribe( (result) => {
      this.myOrders = result;
      console.log(this.myOrders);

      let row_index = 0;
      let col_index = 0;
      this.orderCount = 1;
      for (let order of this.myOrders) {
        console.log("iter");
        var current_product = null;
        for (let product of this.allProducts) {
          if (product.id === order.product_id) {
            console.log(product);
            current_product = product;
            break;
          }
        }
        if (order.order_number === this.orderCount) {
          console.log("true");
          this.orderProducts[row_index].push(current_product);
          col_index++;
        } else {
          this.orderProducts.push([]);
          console.log("false");
          row_index++;
          col_index = 0;
          this.orderCount++;
          this.orderProducts[row_index].push(current_product);
          col_index++;
        }
      }

      console.log(this.orderCount);
      console.log(this.orderProducts);
    });
  }
}
