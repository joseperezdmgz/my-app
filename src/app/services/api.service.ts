import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { listI } from '../models/list.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://reqres.in/';

  constructor(private http: HttpClient) {}

  loginByEmail(form: LoginI): Observable<ResponseI> {
    let direccion = this.url + 'api/login';
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllList(page: number): Observable<listI> {
    let direccion = this.url + 'api/users?page=' + page;
    return this.http.get<listI>(direccion);
  }
}
