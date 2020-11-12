import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [LeaderComponent],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[LeaderComponent],
  providers: []
})
export class LeaderModule { }
