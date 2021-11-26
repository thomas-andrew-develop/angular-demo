import { Component, OnInit } from '@angular/core';
import { TodosService } from '../Services/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = [];
  loading = false;
  constructor(private TodosService : TodosService, ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.TodosService.fetchUsers().subscribe(data => {
      this.todos = data;
      this.loading = true;
    });
  }

  saveTodo(dataForm: {}){
    this.TodosService.addUser(dataForm).subscribe(data => {
      this.fetchData()
    });
  }

  deleteTodo(id: any){
    this.TodosService.deletedUser(id).subscribe(data => {
      this.fetchData()
    });
  }
}
