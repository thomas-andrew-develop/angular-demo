import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FrontendComponent } from './frontend/frontend.component';
import { 
  AuthGuardService as AuthGuard 
} from './Services/Auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: FrontendComponent , children: [
    { path: '', loadChildren: () => import('./frontend/home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./frontend/about/about.module').then(m => m.AboutModule) },
    {path: ':slug', loadChildren: () => import('./frontend/blog-detail/blog-detail.module').then(m => m.BlogDetailModule)}
  ]},
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard] 
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
