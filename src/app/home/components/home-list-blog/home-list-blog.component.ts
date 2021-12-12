import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-list-blog',
  templateUrl: './home-list-blog.component.html',
  styleUrls: ['./home-list-blog.component.scss']
})
export class HomeListBlogComponent implements OnInit {
  @Input() blogs: any;
  categoriesList = [
    {
      id: 1,
      name: 'Commercial'
    },
    {
      id: 2,
      name: 'Design'
    },
    {
      id: 3,
      name: 'Nature'
    },
    {
      id: 4,
      name: 'People'
    },
    {
      id: 5,
      name: 'Photography'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getCategory(id:any){
    let categoryName : any = this.categoriesList.find(category => category.id === id);
    return categoryName.name;
  }

}
