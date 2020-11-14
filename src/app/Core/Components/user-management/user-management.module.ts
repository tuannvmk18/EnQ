import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [UserManagementComponent, UserEditorComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class UserManagementModule { }
