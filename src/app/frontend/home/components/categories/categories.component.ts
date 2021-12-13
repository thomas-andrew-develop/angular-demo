import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categoriesList: any = [];

  
  size : any = 16;
  constructor() { }

  ngOnInit(): void {
    console.log(this.categoriesList);
  }

}
