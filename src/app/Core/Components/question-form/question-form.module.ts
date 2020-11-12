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
import {MatIconModule} from '@angular/material/icon';
import { QuestionViewComponent } from './question-view/question-view.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
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
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [QuestionFormComponent],
  providers: []
})
export class QuestionFormModule { }
