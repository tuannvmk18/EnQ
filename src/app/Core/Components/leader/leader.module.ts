import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
<<<<<<< HEAD
import {MatTableModule} from '@angular/material/table';
=======
import { MatTableModule } from '@angular/material/table';
>>>>>>> 514f3951e507ab2dc767c862c99bd5d8e15d9fee


@NgModule({
  declarations: [LeaderComponent],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    MatTableModule,
  ],
  providers: []
})
export class LeaderModule { }
