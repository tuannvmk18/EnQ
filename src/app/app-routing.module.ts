import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./Module/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./Module/signup/signup.module').then(m => m.SignupModule) }, { path: 'dashboard', loadChildren: () => import('./Module/dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
