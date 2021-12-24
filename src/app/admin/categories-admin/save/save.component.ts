import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Validators, FormGroupDirective, FormGroup, FormControl } from '@angular/forms';
import { SlugifyPipe } from '../../../Pipe/slugify.pipe'; 
@Component({
  selector: 'app-save-categories',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
  providers: [SlugifyPipe]
})
export class SaveCategoriesComponent implements OnInit {
  
  submitted = false;
  formCategories : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    slug: new FormControl('', [Validators.required]),
  });

  @Output() addCategory: EventEmitter<any> = new EventEmitter();
  @Input() categoryDetail: any;

  constructor(private slugifyPipe: SlugifyPipe) { }

  ngOnInit(): void {
    this.formCategories.setValue({
      name: this.categoryDetail.name,
      slug: this.categoryDetail.slug,
    })
  }
  createSlug(){
    let name = this.formCategories.controls['name'].value;
    let slug = this.slugifyPipe.transform(name);
    this.formCategories.controls['slug'].setValue(slug);
  }

  submitForm(form: FormGroupDirective){
    
    if(this.formCategories.valid){
      const params = this.formCategories.value;
      console.log(params);
      if(this.categoryDetail.id.length){
        params.id = this.categoryDetail.id;
        // this.dataUpdateTodo.emit(params);
      }else{
        this.addCategory.emit(params);
      }
      
      form.resetForm();
      this.formCategories.reset();
    }
  }
}
