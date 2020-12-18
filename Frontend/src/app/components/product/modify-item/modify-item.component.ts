import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product/product";
import {ProductsService} from "../../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit {

  @Input() productId: number;
  product: Product;

  constructor(
    private productService: ProductsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    console.log(this.productId);

    this.productService.productById(this.productId).subscribe( product => this.product = product);
  }

  handleModifyDone(): void {
    this.productService.productModifyById(this.product.id, this.product).subscribe(() => {
      this.route.navigate(['/products']);
    });
  }

}
