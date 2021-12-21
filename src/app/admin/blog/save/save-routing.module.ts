import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveBlogComponent } from './save.component';

const routes: Routes = [{ path: '', component: SaveBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveBlogRoutingModule { }
