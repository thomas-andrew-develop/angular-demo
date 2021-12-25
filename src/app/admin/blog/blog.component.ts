import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any;
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.blogService.fetchBlogs().subscribe(data => {
      this.blogs = data;
    });
  }

  editBlog(id: any){
    console.log(id);
    this.router.navigate(
      ['admin/blog/edit', id], 
      { queryParams: { page: 'Edit'} }
    );
  }

  deleteBlog(id: any){
    this.blogService.deleteBlogs(id).subscribe(data => {
      this.fetchData()
    });
  }
}
