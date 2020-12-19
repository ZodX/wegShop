import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  username: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('authenticatedUser');

    if (this.username === 'user')
      this.router.navigate(['/main']);
  }

}
