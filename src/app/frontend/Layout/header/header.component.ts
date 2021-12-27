import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-fe',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: Boolean = false;
  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token && token != '') {
      this.isAuth = true;
    }
  }

}
