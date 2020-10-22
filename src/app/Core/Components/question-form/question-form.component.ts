import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { resQuestion } from '../../Interfaces/reqQuestion';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit {
  data: resQuestion;

  constructor() {
    this.data = {
      id: 'kK3eg7T58hqtdNyLCReH',
      title: 'Are there any flowers to the left of your house? _____________.',
      type: 0,
      rank: 1,
      answers: [{
        A: 'Yes, there are',
        B: ' Yes, there is',
        C: 'No, there isn’t',
        D: '123',
        correctAnswer: 0,
      }],
    };
  }

  ngOnInit(): void { }

}
