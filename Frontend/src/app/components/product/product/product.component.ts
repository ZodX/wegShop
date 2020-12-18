import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../authentication/login/authentication.service";
import {Router} from "@angular/router";

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleModify(): void {
    this.router.navigate(['/modify/' + this.id.toString()]);
  }

}
