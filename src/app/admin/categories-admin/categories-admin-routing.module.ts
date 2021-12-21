import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAdminComponent } from './categories-admin.component';
import { SaveCategoriesComponent } from './save/save.component';

const routes: Routes = [
  { path: '', component: CategoriesAdminComponent, children: [
    { path: 'add', loadChildren: () => import('./save/save.module').then(m => m.SaveCategoriesModule) },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesAdminRoutingModule { }
