import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../Services/blog.service';
@Component({
  selector: 'app-blog-detail-featured',
  templateUrl: './blog-detail-featured.component.html',
  styleUrls: ['./blog-detail-featured.component.scss']
})
export class BlogDetailFeaturedComponent implements OnInit {
  latestBlogs: any = [];
  categoriesList: any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogFeatured();
  }
  getBlogFeatured(){
    let params = '?page=1&limit=3';
    this.blogService.fetchBlogs(params).subscribe(data => {
      this.latestBlogs = data;
    });
  }
  
  getCategories(){
    this.blogService.fetchCategories().subscribe(categories => {
      this.categoriesList = categories;
    });
  }

  getCategoryName(id:any){
    let categoryName : any = this.categoriesList.find((category: any) => category.id === id);
    if(categoryName){
      return categoryName.name;
    }
  }
}
