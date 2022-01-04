import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../Services/blog.service';
@Component({
  selector: 'app-header-fe',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: Boolean = false;
  categoriesList: any = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token && token != '') {
      this.isAuth = true;
    }
    this.getCategories();
  }

  getCategories(){
    this.blogService.fetchCategories().subscribe(categories => {
      this.categoriesList = categories;
    });
  }

}
