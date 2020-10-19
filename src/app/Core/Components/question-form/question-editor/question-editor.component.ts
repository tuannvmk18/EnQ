import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudService } from 'src/app/Core/Services/cloud.service';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionEditorComponent implements OnInit {
  questionForm: FormGroup;

  constructor(private fb: FormBuilder, private cloud: CloudService) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      type: ['', Validators.compose([Validators.required])],
      rank: ['', Validators.compose([Validators.required])],
      question: ['', Validators.compose([Validators.required])],
      A: ['', Validators.compose([Validators.required])],
      B: ['', Validators.compose([Validators.required])],
      C: ['', Validators.compose([Validators.required])],
      D: ['', Validators.compose([Validators.required])],
      correctAnswer: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(): void {
    this.cloud.postQuestion({
      title: this.questionForm.value.question,
      type: Number(this.questionForm.value.type),
      rank: Number(this.questionForm.value.rank),
      answers: {
        A: this.questionForm.value.A,
        B: this.questionForm.value.B,
        C: this.questionForm.value.C,
        D: this.questionForm.value.D,
        correctAnswer: Number(this.questionForm.value.correctAnswer)
      }
    }).subscribe({
      next: val => this.handleSuccess(val),
      error: err => this.handleError(err),
    });
  }

  handleSuccess(val): void {
    console.log(val);
  }

  handleError(err): void {
    console.log(err);
  }

}
