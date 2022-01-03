import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogDetail: any = {};
  constructor(
    private blogService: BlogService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let slugBlog = this.activeRoute.snapshot.paramMap.get('slug');
    this.getDetailBlog(slugBlog);
  }

  

  getDetailBlog(slug: any){
    this.blogService.detailBlogBySlug(slug).subscribe(data => {
      this.blogDetail = data[0];
      console.log(this.blogDetail)
    });
  }

}
