import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Product } from "../../components/product/product"
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  productService() {
    return this.http.get<Product[]>('http://localhost:8080/api/products/getAllProducts');
  }

  productById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/api/products/' + id);
  }

}
