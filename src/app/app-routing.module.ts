import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },  { path: '**', pathMatch: 'full', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
