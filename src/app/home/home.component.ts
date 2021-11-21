import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild('f')  signupForm: NgForm;
  defaultQuestion: string = 'pet';
  question: string = '';
  genders = ['male', 'female'];

  constructor() { }

  ngOnInit(): void {
  }

  resetName(){
    console.log('reset Name');
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }

}
