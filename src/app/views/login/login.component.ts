import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private api: ApiService, private router: Router) {}

  errorStatus: boolean = false;

  ngOnInit(): void {
    this.checkLocalStorage();
  }
  checkLocalStorage() {
    if (localStorage.getItem('token')) this.router.navigate(['dashboard']);
  }

  onLogin(form: LoginI) {
    this.api.loginByEmail(form).subscribe((data) => {
      let dataResponse: ResponseI = data;
      if (dataResponse.token) {
        localStorage.setItem('token', dataResponse.token);
        this.router.navigate(['dashboard']);
      }
    });
  }
}
