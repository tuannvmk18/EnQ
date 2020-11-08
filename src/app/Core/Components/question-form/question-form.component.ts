import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CloudService } from '../../Services/cloud.service';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { QuestionViewComponent } from './question-view/question-view.component';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit {
  data: [] = null;

  constructor(private cloud: CloudService, private dialog: MatDialog, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadQuestion();
  }

  private loadQuestion(): void {
    this.cloud.getAllQuestion().subscribe((x: any) => {
      this.data = x.data;
      this.changeDetection.detectChanges();
    });
  }

  openUploadQuestionForm(): void {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: {
        type: 'Add'
      }
    });
  }

  deleteQuestion(id: string): void {
    console.log(id);
    this.cloud.deleteQuestion(id).subscribe({
      next: (x) => this.deleteQuestionSuccess(x),
      error: e => console.log(e)
    });
  }

  private deleteQuestionSuccess(x): void {
    console.log(x);
    this.loadQuestion();
  }

  openViewQuestion(data): void {
    const dialogRef = this.dialog.open(QuestionViewComponent, {
      data: {
        data
      }
    });
  }

  editQuestion(payload): void {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: {
        type: 'Edit',
        data: payload
      }
    });
  }
}
