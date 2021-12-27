import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesList = [];

  blogs : any;

  latestBlogs : any;

  index: number = 1;
  total: number = 10;
  limit: number = 4;
  category: any = '';
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs(this.category, this.index, this.limit);
    this.getCategories();
    this.getBlogsLatest();    
  }

  getBlogs(category: String, index: number, limit: number){
    let paramsTotal = '?category='+category;
    let params = '?page='+index+'&limit='+limit+'&category='+category;
    this.blogService.fetchBlogs(paramsTotal).subscribe(blogsTotal => {
      this.total = blogsTotal.length;
    });
    this.blogService.fetchBlogs(params).subscribe(blogs => {
      this.blogs = blogs;
    });
  }

  getCategories(){
    this.blogService.fetchCategories().subscribe(categories => {
      this.categoriesList = categories;
    });
  }

  getBlogsLatest(){
    let params = '?sticky=true';
    this.blogService.fetchBlogs(params).subscribe(latestBlogs => {
      this.latestBlogs = latestBlogs;
    });
  }
  
  changePage(val: any){
    this.index = val;
    this.getBlogs(this.category, val, this.limit);
  }

  getCategory(category: any){
    this.category = category;
    this.index = 1;
    this.getBlogs(category, this.index, this.limit);
  }
}
