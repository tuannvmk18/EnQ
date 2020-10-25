import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderComponent } from './leader.component';

const routes: Routes = [{ path: '', component: LeaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
