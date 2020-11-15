import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { concatAll, map } from 'rxjs/operators';
import { UserModel } from 'src/app/Core/Interfaces/userModel';
import { UserService } from 'src/app/Core/Services/user.service';

interface res {
  data: UserModel;
  message: string;
  error: string;
}

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},]
})
export class UserEditorComponent implements OnInit {
  data: UserModel;
  form: FormGroup;
  date = new FormControl(moment([2017, 0, 1]));
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.route.paramMap
      .pipe(
        map((val) => this.userService.getUserByID(val.get('id'))),
        concatAll()
      )
      .subscribe((val: res) => {
        this.data = val.data;
        console.log(this.data);
      });

    this.form = this.fb.group({
      displayName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      point: ['', Validators.compose([Validators.required])],
      rank: ['', Validators.compose([Validators.required])],
      _id: ['', Validators.compose([Validators.required])],
      timeCreate: [
        '',
        Validators.compose([Validators.required]),
      ],
    });
  }

  ngOnInit(): void {}
}
