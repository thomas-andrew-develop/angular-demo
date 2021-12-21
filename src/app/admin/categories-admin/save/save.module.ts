import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCategoriesComponent } from './save.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [
    SaveCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    
    NzButtonModule,
    
    NzGridModule,
    NzLayoutModule
  ]
})
export class SaveCategoriesModule { }
