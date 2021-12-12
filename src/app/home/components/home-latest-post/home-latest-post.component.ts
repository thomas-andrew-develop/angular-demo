import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-latest-post',
  templateUrl: './home-latest-post.component.html',
  styleUrls: ['./home-latest-post.component.scss']
})
export class HomeLatestPostComponent implements OnInit {
  @Input() latestBlogs: any;
  size = 20;
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
