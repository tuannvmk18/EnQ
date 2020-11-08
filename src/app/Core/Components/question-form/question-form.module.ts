import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionFormComponent } from './question-form.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { QuestionViewComponent } from './question-view/question-view.component';
@NgModule({
  declarations: [QuestionFormComponent, QuestionEditorComponent, QuestionViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [QuestionFormComponent],
  providers: []
})
export class QuestionFormModule { }
