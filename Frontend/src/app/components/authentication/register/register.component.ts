import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user-services/user.service';
import {User} from '../User';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  passwordConfirm: string = "";
  notMatchingPasswords: boolean;
  userAlreadyExists: boolean;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleRegister(): void {
    if (this.username == '' || this.password == '' || this.passwordConfirm == ''
      || this.username === null || this.password === null || this.passwordConfirm === null) {
      window.alert('Please fill all fields.');
    } else {
      if (this.password != this.passwordConfirm) {
        window.alert("Please enter matching passwords!");
      } else {
        const user = new User();
        user.username = this.username;
        user.password = this.password;

        this.userService.addUser(user).subscribe(
          data => {
            console.log('success');
            this.router.navigate(['/']);
          },
          error => {
            this.userAlreadyExists = true;
            setTimeout(() =>
              {
                this.userAlreadyExists = false;
              },
              2000);
          }
        );
      }
    }
  }
}
