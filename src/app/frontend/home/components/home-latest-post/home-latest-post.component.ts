import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-latest-post',
  templateUrl: './home-latest-post.component.html',
  styleUrls: ['./home-latest-post.component.scss']
})
export class HomeLatestPostComponent implements OnInit {
  @Input() latestBlogs: any;
  @Input() categoriesList: any;
  size = 20;
  constructor() { }

  ngOnInit(): void {
  }

  getCategoryName(id:any){
    let categoryName : any = this.categoriesList.find((category: any) => category.id === id);
    if(categoryName){
      return categoryName.name;
    }
    
  }
}
