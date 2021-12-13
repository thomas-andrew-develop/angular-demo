import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
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
    FrontendRoutingModule,
  ]
})
export class FrontendModule { }
