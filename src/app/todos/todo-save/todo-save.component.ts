import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() todoItem: any;

  // first_name = this.formTodo.controls['first_name'];
  // last_name = this.formTodo.controls['last_name'];
  // email = this.formTodo.controls['email'];
  // avatar = this.formTodo.controls['avatar'];
  // status = this.formTodo.controls['status'];

  // @Input() set storeArtists(val: any){
  //   this._storeArtists = val
  //   if(this.storeArtists.length > 0) {
  //     this.selectedArtist = this.storeArtists[0]
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
    console.log('todoItem', this.todoItem.first_name)
    this.formTodo.setValue({
      first_name: this.todoItem.first_name,
      last_name: this.todoItem.last_name,
      email: this.todoItem.email,
      avatar: this.todoItem.avatar,
      status: this.todoItem.status,
    })
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
