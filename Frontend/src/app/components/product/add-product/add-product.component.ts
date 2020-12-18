import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AddProductService} from "../../../services/product-services/add-product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private router: Router,
    private http: HttpClient,
    private addProductService: AddProductService
  ) { }

  ngOnInit(): void {
  }

  handleAddDone(): void {
    this.addProductService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    }, error => {
      switch (error) {
        case "EmptyFieldError": {
          window.alert("Some fileld(s) are empty!");
          break;
        }
        case "QuantityIsNaNError": {
          window.alert("Quantity can be only a number!");
          break;
        }
        case "PriceIsNaNError": {
          window.alert("Price can be only a number!");
          break;
        }
        case "QuantityNegativeError": {
          window.alert("Quantity can't be negative!");
          break;
        }
        case "PriceNegativeError": {
          window.alert("Price can't be negative!");
          break;
        }
      }
    });
  }

}
