import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos = [];
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  onDelete(id: any){
    this.deleteTodo.emit(id);
  }
}
