import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendComponent } from './frontend.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';

@NgModule({
  declarations: [
    FrontendComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class FrontendModule { }
