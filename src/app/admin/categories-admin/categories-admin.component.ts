import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
  categories: any;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.blogService.fetchCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
