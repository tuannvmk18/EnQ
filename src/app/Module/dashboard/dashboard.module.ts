import { MiniComponentModule } from './../../Core/mini-component/mini-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { QuestionFormModule } from 'src/app/Core/Components/question-form/question-form.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    QuestionFormModule,
    MiniComponentModule
  ]
})
export class DashboardModule { }
