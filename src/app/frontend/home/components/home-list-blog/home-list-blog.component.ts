import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-list-blog',
  templateUrl: './home-list-blog.component.html',
  styleUrls: ['./home-list-blog.component.scss']
})
export class HomeListBlogComponent implements OnInit {
  @Input() blogs: any = [];
  categoriesList = [];
  constructor() { }

  ngOnInit(): void {
    // this.categoriesList = JSON.parse(this.blogs.category);
  }

  // getCategory(id:any){
  //   let categoryName : any = this.categoriesList.find(category => category.id === id);
  //   return categoryName.name;
  // }

}
