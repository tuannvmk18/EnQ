import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionFormComponent } from './question-form.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [QuestionFormComponent, QuestionEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [QuestionFormComponent],
  providers: []
})
export class QuestionFormModule { }
