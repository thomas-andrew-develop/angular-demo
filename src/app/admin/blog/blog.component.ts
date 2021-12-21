import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.blogService.fetchBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
