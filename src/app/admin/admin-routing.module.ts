import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    data: {
      title: 'Home'
    },
    children: [
    { 
      path: 'categories',
      pathMatch: 'full',
      data: {
        title: 'categories'
      },
      loadChildren: () => import('./categories-admin/categories-admin.module').then(m => m.CategoriesAdminModule) 
    },
    {
      path: 'blog',
      pathMatch: 'full',
      data: {
        title: 'List Blog'
      },
      loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
    },
    { 
      path: 'blog/add',
      pathMatch: 'full',
      data: {
        title: 'Add Blog'
      },
      loadChildren: () => import('./blog/save/save.module').then(m => m.SaveBlogModule)
    },
    { 
      path: 'blog/edit/:id',
      pathMatch: 'full',
      data: {
        title: 'Edit Blog'
      },
      loadChildren: () => import('./blog/save/save.module').then(m => m.SaveBlogModule)
    },
  ] },
  // { path: 'admin/categories-admin/add', loadChildren: () => import('./categories-admin/save/save.module').then(m => m.SaveCategoriesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
