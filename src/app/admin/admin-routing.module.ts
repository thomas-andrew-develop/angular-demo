import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'categories', loadChildren: () => import('./categories-admin/categories-admin.module').then(m => m.CategoriesAdminModule) },
    { path: 'blog', component: BlogComponent , children: [
      { path: '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'add', loadChildren: () => import('./blog/save/save.module').then(m => m.SaveBlogModule) }
    ]}
    // { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
    // { path: 'blog/add', loadChildren: () => import('./blog/save/save.module').then(m => m.SaveBlogModule) }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
