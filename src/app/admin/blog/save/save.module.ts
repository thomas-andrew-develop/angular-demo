import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveBlogComponent } from './save.component';
import { SaveBlogRoutingModule } from './save-routing.module';


@NgModule({
  declarations: [
    SaveBlogComponent
  ],
  imports: [
    CommonModule,
    SaveBlogRoutingModule
  ]
})
export class SaveBlogModule { }
