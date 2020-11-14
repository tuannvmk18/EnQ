import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditorComponent } from './user-editor/user-editor.component';

import { UserManagementComponent } from './user-management.component';

const routes: Routes = [{ path: '', component: UserManagementComponent }, {path: ':id', component: UserEditorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
