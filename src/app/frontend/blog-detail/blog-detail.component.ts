import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
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
    
    this.activeRoute.params.subscribe((params: any) => {
      let slugBlog = params.slug;
      this.getDetailBlog(slugBlog);
    });
  }

  

  getDetailBlog(slug: any){
    let params = '?slug='+slug;
    this.blogService.fetchBlogs(params).subscribe(data => {
      this.blogDetail = data[0];
    });
  }
}
