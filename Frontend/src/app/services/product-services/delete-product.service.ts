import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  constructor(
    private http: HttpClient
  ) { }

  deleteProduct(id: number) {
    return this.http.delete("http://localhost:8080/api/products/delete/" + id);
  }

}
