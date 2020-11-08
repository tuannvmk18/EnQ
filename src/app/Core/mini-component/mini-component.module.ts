import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuestionFormModule } from 'src/app/Core/Components/question-form/question-form.module';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';
@NgModule({
  declarations: [NavBarComponent, DialogSuccessComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    QuestionFormModule
  ],
  exports:[
    NavBarComponent,

  ]
})
export class MiniComponentModule { }
