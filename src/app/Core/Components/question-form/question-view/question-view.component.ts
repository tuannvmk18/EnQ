import { Inject } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionViewComponent implements OnInit {

  data;
  constructor(@Inject(MAT_DIALOG_DATA) public dataF: any) { }

  ngOnInit(): void {
    console.log(this.dataF);
    if(this.dataF) {
      this.data = this.dataF.data;
    }
  }

}
