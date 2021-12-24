import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
  categories: any;
  categoryDetail = {
    id: '',
    name: '',
    slug: ''
  };

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.blogService.fetchCategories().subscribe(data => {
      this.categories = data;
    });
  }

  saveCategories(dataForm: {}){
    this.blogService.addCategories(dataForm).subscribe(data => {
      this.fetchData()
    });
  }

  deleteCategories(id: any){
    this.blogService.deleteCategories(id).subscribe(data => {
      this.fetchData()
    });
  }

  getCategoryDetail(item: any){
    this.categoryDetail = item;
  }

  updateCategories(item: any){
    this.blogService.updateCategories(item).subscribe(data => {
      this.fetchData()
    });
  }

}
