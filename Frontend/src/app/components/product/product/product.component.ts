import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../login/authentication.service";
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

  constructor() { }

  ngOnInit(): void {
  }

}
