import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAdminComponent } from './categories-admin.component';

const routes: Routes = [{ path: '', component: CategoriesAdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesAdminRoutingModule { }
