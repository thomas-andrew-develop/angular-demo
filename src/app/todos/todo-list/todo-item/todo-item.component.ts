import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo  =  {id: String, email: String, first_name: String, last_name: String, avatar: String, status: Boolean};
  @Input() index : number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

}
