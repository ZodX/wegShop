import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Product} from "../components/product/product/product";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ModifyProductService {

  constructor(
    private route: Router,
    private http: HttpClient
  ) { }

  productById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/api/products/' + id)
      .pipe(
        catchError(this.handleErrorProductNotFount)
      );
  }

  productModifyById(id: number, product: Product) {
    if (this.isEmptyField(product)) {
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
    return this.http.put('http://localhost:8080/api/products/modify/' + id, product);
  }

  handleErrorProductNotFount(error) {
    let errorMessage = `Error Code: ${error.status}\nProduct not found in the database.`;
    return throwError(errorMessage);
  }

  isEmptyField(product: Product) {
    return product.description === null || product.quantity === null || product.price === null || product.name === null
      || product.name == "" || product.price.toString() == "" || product.quantity.toString() == "" || product.description == "";
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
