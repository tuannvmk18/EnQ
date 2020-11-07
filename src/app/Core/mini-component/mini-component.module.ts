import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { QuestionFormModule } from 'src/app/Core/Components/question-form/question-form.module';
@NgModule({
  declarations: [SideBarComponent, NavBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    QuestionFormModule
  ],
  exports:[
    NavBarComponent,
   SideBarComponent
  ]
})
export class MiniComponentModule { }
