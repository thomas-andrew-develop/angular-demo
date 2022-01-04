import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  blogs : any = [];
  constructor(private activeRoute: ActivatedRoute,private blogService: BlogService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: any) => {
      let slugCategory = params.slug;
      this.getCategoryId(slugCategory);
      console.log(this.blogs)
    });
  }
  getCategoryId(slugCategory: any){
    this.blogService.fetchCategories().subscribe(categories => {
      let category : any = categories.find((category: any, key: string) => category.slug === slugCategory);
      let params = '?category='+category.id;
      this.blogService.fetchBlogs(params).subscribe(data => {
        this.blogs = data;
      });
    });
  }

  getCategoryName(id:any){
    let categoryName: any;
    this.blogService.fetchCategories().subscribe(categories => {
      let category : any = categories.find((categoryItem: any, key: string) => categoryItem.id === id);
      if(category){
        return categoryName = category.name;
      }
    });
    
  }
}
