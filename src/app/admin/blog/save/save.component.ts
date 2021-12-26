import { Component, OnInit } from '@angular/core';
import { Validators, FormGroupDirective, FormGroup, FormControl, FormArray } from '@angular/forms';
import { BlogService } from '../../../Services/blog.service';
import { SlugifyPipe } from '../../../Pipe/slugify.pipe';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-save-blog',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
  providers: [SlugifyPipe]
})
export class SaveBlogComponent implements OnInit {
  categoriesList : any;

  categoriesChecked: any = []; 

  formBlog : FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    slug: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    excerpt: new FormControl('', [Validators.required]),
    status: new FormControl('1', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    category: new FormArray([], [Validators.required]),
    createdAt: new FormControl(''),
    updatedAt: new FormControl(''),
    sticky: new FormControl(false),
  });


  constructor(
    private blogService: BlogService,
    private slugifyPipe: SlugifyPipe,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
    const idBlog = this.activeRoute.snapshot.paramMap.get('id');
    if(idBlog && idBlog != ''){
      this.getDetailBlog(idBlog);
    }
    
  }

  getDetailBlog(id: any){
    this.blogService.detailBlog(id).subscribe(data => {
      this.formBlog.setValue({
        title: data.title,
        slug: data.slug,
        description: data.description,
        excerpt: data.excerpt,
        status: data.status,
        image: data.image,
        category: data.category,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
      this.categoriesChecked = data.category;
      // let categoriesList = data.category;
      // let i: number = 0;
      // categoriesList.forEach((item: any) => {
      //   console.log(item);
      //   this.categoriesChecked.push(item);
      //   i++;
      // });
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.formBlog.get('category') as FormArray;
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

  createSlug(){
    let name = this.formBlog.controls['title'].value;
    let slug = this.slugifyPipe.transform(name);
    this.formBlog.controls['slug'].setValue(slug);
  }

  submitForm(form: FormGroupDirective){
  
    if(this.formBlog.valid){
      const params = this.formBlog.value;
      params.createdAt = new Date();
      params.updatedAt = new Date();
      console.log(params);
      // if(this.categoryDetail.id.length){
        // params.id = this.categoryDetail.id;
        // this.dataUpdateTodo.emit(params);
      // }else{
      this.blogService.addBlogs(params).subscribe(data => {
        this.router.navigate(['/admin/blog']);
      });
      // }
      
      // form.resetForm();
      // this.formBlog.reset();
    }
    
  }

  getCategories(){
    this.blogService.fetchCategories().subscribe(data => {
      this.categoriesList = data;
    });
  }
}
