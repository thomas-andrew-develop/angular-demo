import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AppService } from '../Services/app.service'; 
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
    this.AppService.fetchTodo().subscribe(data => {
        console.log(data)
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.formLogin.valid){
      this.AppService.login(this.formLogin.value).subscribe(data => {
        if(data.access_token){
          localStorage.setItem("token", JSON.stringify(data.access_token));
        }
      });
    }
  }

}
