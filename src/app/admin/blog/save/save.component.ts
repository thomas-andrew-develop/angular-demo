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

  

  idBLog: any;

  formBlog : FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    slug: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    excerpt: new FormControl('', [Validators.required]),
    status: new FormControl('1', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    category: new FormArray([], [Validators.required]),
    createdAt: new FormControl(new Date()),
    updatedAt: new FormControl(new Date()),
    sticky: new FormControl(false),
  });

  categoriesListChecked: FormArray = this.formBlog.get('category') as FormArray;


  constructor(
    private blogService: BlogService,
    private slugifyPipe: SlugifyPipe,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
    let idBlog = this.activeRoute.snapshot.paramMap.get('id');
    if(idBlog && idBlog != ''){
      this.getDetailBlog(idBlog);
    }
  }

  getDetailBlog(id: any){
    this.blogService.detailBlog(id).subscribe(data => {
      data.category.forEach((item: any) => {
        this.categoriesListChecked.push(new FormControl(item));
      });
      this.formBlog.controls['title'].setValue(data.title);
      this.formBlog.controls['slug'].setValue(data.slug);
      this.formBlog.controls['description'].setValue(data.description);
      this.formBlog.controls['excerpt'].setValue(data.excerpt);
      this.formBlog.controls['status'].setValue(data.status);
      this.formBlog.controls['image'].setValue(data.image);
      this.formBlog.controls['createdAt'].setValue(data.createdAt);
      this.formBlog.controls['updatedAt'].setValue(data.updatedAt);
      this.formBlog.controls['sticky'].setValue(data.sticky);
      this.idBLog = data.id;
    });
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.categoriesListChecked.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.categoriesListChecked.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          this.categoriesListChecked.removeAt(i);
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
    let idBlog = this.activeRoute.snapshot.paramMap.get('id');
    let params = this.formBlog.value;
    if(this.formBlog.valid){
      if(idBlog && idBlog != ''){
        params.updatedAt = new Date();
        params.id = this.idBLog;
        this.blogService.updateBlogs(params).subscribe(data => {
          this.router.navigate(['/admin/blog']);
        });
      }else{
        this.blogService.addBlogs(params).subscribe(data => {
          this.router.navigate(['/admin/blog']);
        });
      }
      
      form.resetForm();
      this.formBlog.reset();
    }
    
  }

  getCategories(){
    this.blogService.fetchCategories().subscribe(data => {
      this.categoriesList = data;
    });
  }
}
