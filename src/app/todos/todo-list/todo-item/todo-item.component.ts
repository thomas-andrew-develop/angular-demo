import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo  =  {id: String, email: String, first_name: String, last_name: String, avatar: String, status: Boolean};
  @Input() index : number = 0;

  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() changeStatusTodo: EventEmitter<any> = new EventEmitter();
  @Output() editTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(id: any){
    this.deleteTodo.emit(id);
  }

  onChangeStatus(item: any){
    if(item.status == 'inactive'){
      item.status = 'active';
    }else{
      item.status = 'inactive';
    }
    this.changeStatusTodo.emit(item);
  }

  onEdit(item: any){
    this.editTodo.emit(item);
  }
}
