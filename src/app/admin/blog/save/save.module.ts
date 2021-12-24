import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveBlogComponent } from './save.component';
import { SaveBlogRoutingModule } from './save-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SaveBlogComponent
  ],
  imports: [
    CommonModule,
    SaveBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    NzGridModule,
    NzCardModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule
  ]
})
export class SaveBlogModule { }
