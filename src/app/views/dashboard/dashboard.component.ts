import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

import { listI } from '../../models/list.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: listI | undefined;
  u: any[] = [];
  totalPages: any;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage();

    this.api.getAllList(1).subscribe((data) => {
      this.users = data;
      this.u = this.users.data;
      this.totalPages = this.users.total_page;
    });
  }

  checkLocalStorage() {
    if (!localStorage.getItem('token')) this.router.navigate(['login']);
  }

  changePage(action: any, currentPage: any) {
    if (action == 'next') {
      this.api.getAllList(currentPage + 1).subscribe((data) => {
        this.users = data;
        this.u = this.users.data;
      });
    }
    if (action == 'previus') {
      this.api.getAllList(currentPage - 1).subscribe((data) => {
        this.users = data;
        this.u = this.users.data;
      });
    }

    return 1;
  }
}
