import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './text-exams-view.component.html',
  styleUrls: ['./text-exams-view.component.scss'],
})
export class TextExamsViewComponent implements OnInit {
  public data;
  constructor(
    @Inject(MAT_DIALOG_DATA) private dataF: any,
    private dialogRef: MatDialogRef<TextExamsViewComponent>
  ) {}

  ngOnInit(): void {
    this.data = this.dataF.dataF;
    console.log(this.data);
  }
}
