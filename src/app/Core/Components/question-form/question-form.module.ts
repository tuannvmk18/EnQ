import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionFormComponent } from './question-form.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { httpInterceptorProviders } from '../../Interceptors';



@NgModule({
  declarations: [QuestionFormComponent, QuestionEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [QuestionFormComponent],
  providers: []
})
export class QuestionFormModule { }
