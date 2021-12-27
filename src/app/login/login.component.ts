import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { BlogService } from '../Services/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  submitted = false;

  errorMessage = '';

  constructor(private blogService: BlogService, public router: Router) { }

  ngOnInit(): void {
    const payload = {};
    const token = localStorage.getItem('token');
    if (token && token != '') {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit(): void {
    this.submitted = true;
    let params = this.formLogin.value;
    if(this.formLogin.valid){
      this.blogService.loginBlogs().subscribe(data => {
        let email : any = data.find((item: any) => item.email == params.username);
        let password : any = data.find((item: any) => item.password == params.password);
        if(Object.keys(email).length > 0 && Object.keys(password).length > 0){
          localStorage.setItem('token', params.email);
          this.router.navigate(['/admin']);
        }
      });
    }else{
      Object.values(this.formLogin.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
