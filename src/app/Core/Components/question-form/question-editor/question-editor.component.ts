import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { delay } from 'rxjs/operators';
import { resQuestion } from 'src/app/Core/Interfaces/reqQuestion';
import { CloudService } from 'src/app/Core/Services/cloud.service';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionEditorComponent implements OnInit, AfterViewInit {
  questionForm: FormGroup;
  isLinear = false;
  isLoading = false;

  @Input() data: any;
  @Input() type: string;
  @ViewChildren('type') typebtn: QueryList<MatRadioButton>;
  @ViewChildren('rank') rankbtn: QueryList<MatCheckbox>;
  @ViewChildren('correctAnswer') correctAnswer: QueryList<MatCheckbox>;
  // tslint:disable-next-line: max-line-length
  constructor(
    private fb: FormBuilder,
    private cloud: CloudService,
    @Inject(MAT_DIALOG_DATA) public dataF: any,
    public dialogRef: MatDialogRef<QuestionEditorComponent>,
    private changeDetection: ChangeDetectorRef
  ) {
    if (dataF) {
      this.type = dataF.type;
      this.data = dataF.data;
    }
  }

  ngAfterViewInit(): void {
    if (this.type === 'Edit' && this.data !== undefined) {
      this.typebtn.forEach((x) => {
        if (x.value === this.questionForm.controls.type.value) {
          x.checked = true;
        }
      });

      this.rankbtn.forEach((x) => {
        if (x.value === this.questionForm.controls.rank.value) {
          x.checked = true;
        }
      });

      this.correctAnswer.forEach((x) => {
        if (
          Number(x.value) === this.questionForm.controls.correctAnswer.value
        ) {
          x.checked = true;
        }
      });
    }
    this.changeDetection.detectChanges();
  }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      type: ['', Validators.compose([Validators.required])],
      rank: ['', Validators.compose([Validators.required])],
      question: ['', Validators.compose([Validators.required])],
      A: ['', Validators.compose([Validators.required])],
      B: ['', Validators.compose([Validators.required])],
      C: ['', Validators.compose([Validators.required])],
      D: ['', Validators.compose([Validators.required])],
      correctAnswer: ['', Validators.compose([Validators.required])],
    });
    if (this.type === 'Edit') {
      if (this.data === undefined) {
        throw new Error('Data must not empty in Edit mode');
      } else {
        this.bindingData(this.data);
      }
    }
  }

  bindingData(data: any): void {
    this.questionForm.controls.type.setValue(data.type);
    this.questionForm.controls.rank.setValue(data.rank);
    this.questionForm.controls.question.setValue(data.title);
    this.questionForm.controls.A.setValue(data.answer.A);
    this.questionForm.controls.B.setValue(data.answer.B);
    this.questionForm.controls.C.setValue(data.answer.C);
    this.questionForm.controls.D.setValue(data.answer.D);
    this.questionForm.controls.correctAnswer.setValue(
      data.answer.correctAnswer
    );
  }

  onSubmit(): void {
    // tslint:disable-next-line: triple-equals
    if (this.type == 'Add') {
      this.postQuestion();
      // tslint:disable-next-line: triple-equals
    } else if (this.type == 'Edit') {
      this.editQuestion();
    }
  }

  editQuestion(): void {
    this.cloud
      .editQuestionById(this.data._id, {
        title: this.questionForm.value.question,
        type: this.questionForm.value.type,
        rank: this.questionForm.value.rank,
        answer: {
          A: this.questionForm.value.A,
          B: this.questionForm.value.B,
          C: this.questionForm.value.C,
          D: this.questionForm.value.D,
          correctAnswer: Number(this.questionForm.value.correctAnswer),
        },
      })
      .subscribe({
        next: (val) => this.handleEditSuccess(val),
        error: (error) => this.handleEditError(error),
      });
  }

  handleEditSuccess(val): void {
    console.log(val);
  }

  handleEditError(err): void {
    console.log(err);
  }

  postQuestion(): void {
    this.isLoading = !this.isLoading;
    this.cloud
      .postQuestion({
        title: this.questionForm.value.question,
        type: this.questionForm.value.type,
        rank: this.questionForm.value.rank,
        answer: {
          A: this.questionForm.value.A,
          B: this.questionForm.value.B,
          C: this.questionForm.value.C,
          D: this.questionForm.value.D,
          correctAnswer: Number(this.questionForm.value.correctAnswer),
        },
      })
      .pipe(delay(500))
      .subscribe({
        next: (val) => this.handlePostSuccess(val),
        error: (err) => this.handlePostError(err),
      });
  }

  handlePostSuccess(val): void {
    this.isLoading = !this.isLoading;
    alert('Upload question success');
    this.dialogRef.close();
  }

  handlePostError(err): void {
    this.isLoading = !this.isLoading;
    alert('Upload question failed');
    this.dialogRef.close();
    console.log(err);
  }

  deleteQuestion(): void {
    this.cloud.deleteQuestion(this.data.id).subscribe({
      next: () => alert('Delete success'),
      error: () => alert('Delete error'),
    });
  }
}
