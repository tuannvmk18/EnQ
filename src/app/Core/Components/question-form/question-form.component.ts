import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { resQuestion } from '../../Interfaces/reqQuestion';
import { CloudService } from '../../Services/cloud.service';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit {
  data;

  constructor(private cloud: CloudService) {
    // this.cloud.getQuestionByType(0).subscribe({
    //   next: (val: any) => {
    //     console.log(val);
    //     this.data = val.data;
    //   }
    // });

    this.cloud.deleteQuestion('RLwoSh4VjnPvmIxLivUs').subscribe({
      next: (x) => console.log(x),
      error: (x) => console.log(x)
    });
  }

  ngOnInit(): void { }

}
