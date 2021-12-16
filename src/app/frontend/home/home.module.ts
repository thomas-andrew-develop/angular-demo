import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { CategoriesComponent } from './components/categories/categories.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { HomeListBlogComponent } from './components/home-list-blog/home-list-blog.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgxMasonryModule } from 'ngx-masonry';
import { HomeLatestPostComponent } from './components/home-latest-post/home-latest-post.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    HomeListBlogComponent,
    HomeLatestPostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
    NgxMasonryModule,
    NzDividerModule
  ]
})
export class HomeModule { }
