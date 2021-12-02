import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoSaveComponent } from './todo-save/todo-save.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoSortComponent } from './todo-sort/todo-sort.component';
import { ShortPipe } from './todo-list/todo-item/short.pipe';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoSaveComponent,
    TodoSearchComponent,
    TodoSortComponent,
    ShortPipe,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
