import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AppService } from '../Services/app.service';
import {HttpParams} from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    grant_type: new FormControl('password'),
  });

  submitted = false;

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    const payload = {};
    this.AppService.fetchTodo().subscribe();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.formLogin.valid){
      const params = new HttpParams()
        .set('username', this.formLogin.controls['username'].value)
        .set('password', this.formLogin.controls['password'].value)
        .set('grant_type', 'password');
      this.AppService.login(params.toString()).subscribe(data => {
        if(data.access_token){
          localStorage.setItem("token", JSON.stringify(data.access_token));
        }
      });
    }
  }

}
