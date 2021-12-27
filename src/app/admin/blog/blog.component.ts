import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import {Router} from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any;
  total = 1;
  loading = true;
  pageSize = 5;
  pageIndex = 1;
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.fetchData(this.pageIndex, this.pageSize);
  }

  fetchData(pageIndex: number,pageSize: number){
    let params = '?page='+pageIndex+'&limit='+pageSize;
    let paramsTotal = '';
    this.loading = true;
    this.blogService.fetchBlogs(paramsTotal).subscribe(data => {
      this.total = data.length;
    });
    this.blogService.fetchBlogs(params).subscribe(data => {
      this.loading = false;
      this.blogs = data;
    });
  }

  editBlog(id: any){
    this.router.navigate(
      ['admin/blog/edit', id]
    );
  }

  deleteBlog(id: any){
    this.blogService.deleteBlogs(id).subscribe(data => {
      this.fetchData(this.pageIndex,this.pageSize)
    },
    err => alert('Please wait ...'));
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.fetchData(pageIndex, pageSize);
  }
}
