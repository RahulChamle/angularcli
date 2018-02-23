import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { LoginService } from '../login-service/login.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    userId: '',
    password: ''
  }

  errorMessage: string;

  userDetails: Array<any> = [];

  constructor(private router: Router, private loginService: LoginService) { }

  login() {
    if (this.user.userId != '' && this.user.password != '') {
      console.log('user details are ', this.user);
      this.loginService.getLoginDetails(this.user).subscribe(data => {
        console.log('user details are ', data);
        this.router.navigate(['/home'])
      },
        error => this.errorMessage = <any>error)
    } else {
      alert('Pls fill all details');
    }
  }

  ngOnInit() {
  }

}
