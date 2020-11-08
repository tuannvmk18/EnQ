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
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  @Input() data: any;
  @Input() type: string;
  @ViewChildren('type') typebtn: QueryList<ElementRef>;
  @ViewChildren('rank') rankbtn: QueryList<ElementRef>;
  @ViewChildren('correctAnswer') correctAnswer: QueryList<ElementRef>;
  constructor(private fb: FormBuilder, private cloud: CloudService, @Inject(MAT_DIALOG_DATA) public dataF: any) {
    if (dataF) {
      this.type = dataF.type;
      this.data = dataF.data;
    }
  }

  ngAfterViewInit(): void {
    if (this.type === 'Edit' && this.data !== undefined) {
      this.typebtn.forEach((x) => {
        // tslint:disable-next-line: triple-equals
        if (x.nativeElement.value == this.questionForm.controls.type.value) {
          x.nativeElement.checked = true;
        }
      });

      this.rankbtn.forEach((x) => {
        // tslint:disable-next-line: triple-equals
        if (x.nativeElement.value == this.questionForm.controls.rank.value) {
          x.nativeElement.checked = true;
        }
      });
    }

    this.correctAnswer.forEach((x) => {
      if (
        // tslint:disable-next-line: triple-equals
        x.nativeElement.value == this.questionForm.controls.correctAnswer.value
      ) {
        x.nativeElement.checked = true;
      }
    });
  }

  ngOnInit(): void {
    console.log(this.data);
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
    if (this.type == 'Add') {
      this.postQuestion();
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
    this.cloud
      .postQuestion({
        title: this.questionForm.value.question,
        type: this.questionForm.value.type,
        rank: this.questionForm.value.rank,
        answer:
        {
          A: this.questionForm.value.A,
          B: this.questionForm.value.B,
          C: this.questionForm.value.C,
          D: this.questionForm.value.D,
          correctAnswer: Number(this.questionForm.value.correctAnswer),
        },
      })
      .subscribe({
        next: (val) => this.handlePostSuccess(val),
        error: (err) => this.handlePostError(err),
      });
  }

  handlePostSuccess(val): void {
    console.log(val);
  }

  handlePostError(err): void {
    console.log(err);
  }

  deleteQuestion(): void {
    this.cloud.deleteQuestion(this.data.id).subscribe({
      next: () => alert('Delete success'),
      error: () => alert('Delete error')
    });
  }
}
