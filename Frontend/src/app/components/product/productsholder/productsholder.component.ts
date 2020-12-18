import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product";
import {Router} from "@angular/router";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-productsholder',
  templateUrl: './productsholder.component.html',
  styleUrls: ['./productsholder.component.css']
})
export class ProductsholderComponent implements OnInit {

  products: Product[];
  productRows: Product[][] = [[]];
  columns = 4;
  rows: number;

  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.productService().subscribe((result) => {
      this.products = result;
      this.rows = Math.floor(this.products.length/4) + 1;
      for (var i = 0; i < this.rows - 1; i++) {
        this.productRows.push([]);
      }

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
          this.productRows[i].push(new Product());
        }
      }

      var productRows = this.productRows;
      var c_row = 0;
      var c_col = 0;
      this.products.forEach(function (c_product) {
        productRows[c_row][c_col] = c_product;
        if (c_col < 3) {
          c_col++;
        } else {
          c_col = 0;
          c_row++;
        }
      });
      this.productRows = productRows;
      console.log(this.productRows);
    });
  }
}
