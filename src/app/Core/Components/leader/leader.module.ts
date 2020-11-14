import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [LeaderComponent],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    MatTableModule,
  ],
  exports:[LeaderComponent],
  providers: []
})
export class LeaderModule { }
