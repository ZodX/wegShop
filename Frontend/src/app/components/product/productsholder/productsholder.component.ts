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
    });
  }

}
