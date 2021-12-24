import { Component, OnInit } from '@angular/core';
import { Validators, FormGroupDirective, FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-save-blog',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveBlogComponent implements OnInit {
  categories : Array<any> = [
    { name: 'Apple', value: 'Apple' },
    { name: 'Pear', value: 'Pear' },
    { name: 'Orange', value: 'Orange' }
  ]

  formBlog : FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    excerpt: new FormControl('', [Validators.required]),
    status: new FormControl('approve', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    category: new FormArray([], [Validators.required]),
    // slug: new FormControl('', [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.formBlog.get('category') as FormArray;

    console.log(e);

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm(form: FormGroupDirective){
    console.log(this.formBlog.value);
    console.log(form.value);
  }
}
