import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SlugifyPipe } from '../../../Pipe/slugify.pipe';
@Component({
  selector: 'app-save-categories',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveCategoriesComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  constructor(private fb: FormBuilder, private slugifyPipe: SlugifyPipe) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      category: [null, [Validators.email, Validators.required]],
    });
  }

}
