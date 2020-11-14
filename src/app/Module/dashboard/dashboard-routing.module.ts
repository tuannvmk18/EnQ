import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderComponent } from 'src/app/Core/Components/leader/leader.component';
import { QuestionFormComponent } from 'src/app/Core/Components/question-form/question-form.component';
import { UserEditorComponent } from 'src/app/Core/Components/user-management/user-editor/user-editor.component';
import { UserManagementComponent } from 'src/app/Core/Components/user-management/user-management.component';
import { AuthGuard } from 'src/app/Core/Guard/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'question', component: QuestionFormComponent},
    {path: 'leader', component: LeaderComponent},
    {path: 'user', component: UserManagementComponent},
    {path: 'user/:id', component: UserEditorComponent}
  ], canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
