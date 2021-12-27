import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-home-list-blog',
  templateUrl: './home-list-blog.component.html',
  styleUrls: ['./home-list-blog.component.scss']
})
export class HomeListBlogComponent implements OnInit {
  @Input() blogs: any = [];
  @Input() categoriesList: any;

  constructor() { }

  ngOnInit(): void {

  }
  getCategoryName(id:any){
    let categoryName : any = this.categoriesList.find((category: any) => category.id === id);
    return categoryName.name;
  }
}
