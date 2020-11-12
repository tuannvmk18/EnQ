import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LeaderComponent],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule

  ],
})
export class LeaderModule { }
