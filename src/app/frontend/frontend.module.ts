import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendComponent } from './frontend.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@NgModule({
  declarations: [
    FrontendComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    NzDropDownModule
  ]
})
export class FrontendModule { }
