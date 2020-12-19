import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../authentication/login/authentication.service";
import {Router} from "@angular/router";
import {DeleteProductService} from "../../../services/product-services/delete-product.service";
import {ProductsComponent} from "../products/products.component";
import {CartAddService} from "../../../services/cartservices/cart-add.service";
import {Cart} from "../../cart/cart";
import {Product} from "./product";
import {ModifyProductService} from "../../../services/product-services/modify-product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() quantity: number;
  @Input() price: number;
  @Input() description: string;
  username: string;

  constructor(
    private router: Router,
    private deleteService: DeleteProductService,
    private cartAddService: CartAddService
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("authenticatedUser");
  }

  handleModify(): void {
    this.router.navigate(['/modify/' + this.id.toString()]);
  }

  handleDelete(): void {
    this.deleteService.deleteProduct(this.id).subscribe(() => {
      this.redirectTo("/products");
    });
  }

  redirectTo(uri: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  handleAddToCart(): void {
    if (this.quantity < 1) {
      window.alert("Out of stock");
    } else {
      let cart: Cart = new Cart();
      cart.username = this.username;
      cart.product_id = this.id;

      this.quantity -= 1;

      this.cartAddService.addToCart(cart).subscribe(() => {});
    }

  }

}
