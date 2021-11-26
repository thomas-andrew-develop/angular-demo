import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, FormGroupDirective} from '@angular/forms';
@Component({
  selector: 'app-todo-save',
  templateUrl: './todo-save.component.html',
  styleUrls: ['./todo-save.component.scss']
})
export class TodoSaveComponent implements OnInit {
  formTodo : FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl('', [Validators.required]),
    status: new FormControl('inactive', [Validators.required])
  });
  @Output() dataAddTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formTodo.controls;
  }

  onSubmit(thisForm: FormGroupDirective): void {

    if(this.formTodo.valid){
      const params = this.formTodo.value;
      this.dataAddTodo.emit(params);
      thisForm.resetForm()
      this.formTodo.reset();
      this.formTodo.controls['status'].setValue('inactive');
    }
  }

}
