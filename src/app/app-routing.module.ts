import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./frontend/home/home.module').then(m => m.HomeModule) },
  // { path: 'about', loadChildren: () => import('./frontend/about/about.module').then(m => m.AboutModule) },
  // { path: 'home', loadChildren: () => import('./frontend/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  { path: 'Frontend', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
