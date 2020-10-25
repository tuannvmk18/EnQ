import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFormComponent } from 'src/app/Core/Components/question-form/question-form.component';
import { AuthGuard } from 'src/app/Core/Guard/auth.guard';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{path: '', component: DashboardComponent, children: [{path: 'question', component: QuestionFormComponent, outlet: 'approuter'}], canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
