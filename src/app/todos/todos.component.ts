import { Component, OnInit } from '@angular/core';
import { TodosService } from '../Services/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = [];
  total = '';
  constructor(private TodosService : TodosService) { }

  ngOnInit(): void {
    this.TodosService.fetchUsers().subscribe(data => {
      this.todos = data.data;
    });
  }

}
