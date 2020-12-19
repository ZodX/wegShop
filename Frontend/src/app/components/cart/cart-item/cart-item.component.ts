import {Component, Input, OnInit} from '@angular/core';
import {CartDeleteService} from "../../../services/cartservices/cart-delete.service";
import {Cart} from "../cart";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product_id: number;
  @Input() username: string;
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;

  constructor(
    private cartDeleteService: CartDeleteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('authenticatedUser');
  }

  handleRemoveCartItem(): void {
    let cart = new Cart();
    cart.username = this.username;
    cart.product_id = this.product_id;

    this.cartDeleteService.deleteCart(cart).subscribe(() => {
      this.redirectTo("/cart");
    });
  }

  redirectTo(uri: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

}
