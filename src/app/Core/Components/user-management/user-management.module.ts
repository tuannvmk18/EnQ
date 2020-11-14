import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserEditorComponent } from './user-editor/user-editor.component';


@NgModule({
  declarations: [UserManagementComponent, UserEditorComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  exports: [UserEditorComponent]
})
export class UserManagementModule { }
