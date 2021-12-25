import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'categories', loadChildren: () => import('./categories-admin/categories-admin.module').then(m => m.CategoriesAdminModule) },
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
    { path: 'blog/add', loadChildren: () => import('./blog/save/save.module').then(m => m.SaveBlogModule) },
    { path: 'blog/edit/:id', loadChildren: () => import('./blog/save/save.module').then(m => m.SaveBlogModule) },
  ] },
  // { path: 'admin/categories-admin/add', loadChildren: () => import('./categories-admin/save/save.module').then(m => m.SaveCategoriesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
