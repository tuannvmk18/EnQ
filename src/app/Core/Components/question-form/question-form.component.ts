import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
