import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesAdminRoutingModule } from './categories-admin-routing.module';
import { CategoriesAdminComponent } from './categories-admin.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    CategoriesAdminComponent
  ],
  imports: [
    CommonModule,
    CategoriesAdminRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzFormModule,
    NzLayoutModule,
    NzGridModule
  ]
})
export class CategoriesAdminModule { }
