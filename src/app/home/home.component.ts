import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm: FormGroup = new FormGroup({
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'gender': new FormControl('male'),
  });

  constructor() { }

  ngOnInit(): void {

  }

  resetName(){
    console.log('reset Name');
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
