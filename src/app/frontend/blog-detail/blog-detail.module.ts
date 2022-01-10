import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';
import { BannerModule } from '../common/banner/banner.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NoSanitizePipe } from '../../Pipe/no-sanitize.pipe';
import { BlogDetailFeaturedComponent } from './blog-detail-featured/blog-detail-featured.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CategoryNamePipe } from '../../Pipe/category-name.pipe';
@NgModule({
  declarations: [
    BlogDetailComponent,
    NoSanitizePipe,
    BlogDetailFeaturedComponent,
    CategoryNamePipe
  ],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    BannerModule,
    NzGridModule,
    NzSpaceModule,
  ],
  exports: [CategoryNamePipe]
})
export class BlogDetailModule { }
