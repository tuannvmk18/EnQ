import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserEditorRoutingModule } from './user-editor-routing.module';
import { UserEditorComponent } from './user-editor.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations: [UserEditorComponent],
    imports: [
        CommonModule,
        UserEditorRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [UserEditorComponent]
})
export class UserEditorModule { }
