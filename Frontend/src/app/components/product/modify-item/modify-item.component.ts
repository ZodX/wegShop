import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product/product";
import {ProductsService} from "../../../services/product-services/products.service";
import {Router} from "@angular/router";
import {ModifyProductService} from "../../../services/product-services/modify-product.service";

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit {

  @Input() productId: number;
  product: Product;

  constructor(
    private modifyService: ModifyProductService,
    private route: Router
  ) { }

  ngOnInit(): void {
    console.log(this.productId);

    this.modifyService.productById(this.productId).subscribe( product => {
      this.product = product;
    }, error => {
      this.route.navigate(['/products']);
    });
  }

  handleModifyDone(): void {
    this.modifyService.productModifyById(this.product.id, this.product).subscribe(() => {
      this.route.navigate(['/products']);
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
