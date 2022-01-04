import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { BannerModule } from '../common/banner/banner.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    BannerModule,
    NzGridModule,
    NzSpaceModule,
    NgxMasonryModule
  ]
})
export class CategoryModule { }
