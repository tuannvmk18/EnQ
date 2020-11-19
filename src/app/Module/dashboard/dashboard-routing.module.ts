import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFormComponent } from 'src/app/Core/Components/question-form/question-form.component';
import { UserEditorComponent } from 'src/app/Core/Components/user-editor/user-editor.component';
import { AuthGuard } from 'src/app/Core/Guard/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {
      path: 'question',
      component: QuestionFormComponent
    },
    {
      path: 'leader',
      loadChildren: () => import('../../Core/Components/leader/leader.module').then(m => m.LeaderModule)
    },
    {
      path: 'user',
      loadChildren: () => import('src/app/Core/Components/user-management/user-management.module').then(m => m.UserManagementModule)
    },
    {
      path: 'user/:id',
      loadChildren: () => import('../../Core/Components/user-editor/user-editor.module').then(m => m.UserEditorModule),
    }
  ], canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
