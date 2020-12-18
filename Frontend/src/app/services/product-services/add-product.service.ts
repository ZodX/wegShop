import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../components/product/product/product";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    if (this.isThereEmptyField(product)) {
      return this.handleErrorEmptyField(Error);
    }
    if (isNaN(product.price)) {
      return this.handlePriceIsNaN(Error);
    }
    if (isNaN(product.quantity)) {
      return this.handleQuantityIsNaN(Error);
    }
    if (product.quantity < 0) {
      return this.handleQuantityNegative(Error);
    }
    if (product.price < 0) {
      return this.handlePriceNegative(Error);
    }
    return this.http.post<Product>('http://localhost:8080/api/products/newProduct', product);
  }

  isThereEmptyField(product: Product){
    return product.name === null || product.description === null || product.quantity === null || product.price === null
      || product.name == "" || product.quantity.toString() == "" || product.description == ""
      || product.price.toString() == "";
  }

  handleErrorEmptyField(error) {
    let errorMessage = "EmptyFieldError";
    return throwError(errorMessage);
  }

  handleQuantityIsNaN(error) {
    let errorMessage = "QuantityIsNaNError";
    return throwError(errorMessage);
  }

  handlePriceIsNaN(error) {
    let errorMessage = "PriceIsNaNError";
    return throwError(errorMessage);
  }

  handleQuantityNegative(error) {
    let errorMessage = "QuantityNegativeError";
    return throwError(errorMessage);
  }

  handlePriceNegative(error) {
    let errorMessage = "PriceNegativeError";
    return throwError(errorMessage);
  }
}
