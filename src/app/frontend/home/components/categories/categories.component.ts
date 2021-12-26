import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categoriesList: any = [];
  @Output() getCategory: EventEmitter<any> = new EventEmitter();
  categoryActive: any = '';

  size : any = 16;
  constructor() { }

  ngOnInit(): void {
   
  }

  selectCategory(value: any){
    this.categoryActive = value;
    this.getCategory.emit(value);
    
  }
}
