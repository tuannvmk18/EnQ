import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { resQuestion } from '../../Interfaces/reqQuestion';
import { CloudService } from '../../Services/cloud.service';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit {
  data: any;

  constructor(private cloud: CloudService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  openUploadQuestionForm(): void {
    const dialogRef = this.dialog.open(QuestionEditorComponent, {
      data: {
        type: 'Add'
      }
    });
  }

}
