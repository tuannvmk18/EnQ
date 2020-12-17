import { TextExamsViewComponent } from './text-exams-view/text-exams-view.component';
import { TestExamHistory } from './../../Interfaces/TestExamHistory';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { from } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';
import { UserModel } from 'src/app/Core/Interfaces/userModel';
import { UserService } from 'src/app/Core/Services/user.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


interface res {
  data: UserModel;
  message: string;
  error: string;
}

interface friend {
  _id: string,
  displayName: string,
  photoUrl: string
}
@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },]
})
export class UserEditorComponent implements OnInit {
  data: UserModel;
  form: FormGroup;
  testExamHistory: MatTableDataSource<any>;
  friendList: friend[];
  displayedColumns: string[] = ['timeStart', 'Point', 'star']

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.route.paramMap
      .pipe(
        map((val) => this.userService.getUserByID(val.get('id'))),
        concatAll()
      )
      .subscribe((val: res) => {
        this.data = val.data;
        this.loadFriend(val.data);
        this.testExamHistory = new MatTableDataSource(val.data.testExamHistory);
        this.testExamHistory.sort = this.sort;
        console.log(this.testExamHistory.data);
        this.parseData();
      });

    this.form = this.fb.group({
      displayName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      point: ['', Validators.compose([Validators.required])],
      rank: ['', Validators.compose([Validators.required])],
      _id: [
        { value: '', disabled: true },
        Validators.compose([Validators.required])],
      timeCreate: [
        { value: '', disabled: true },
        Validators.compose([Validators.required]),
      ],
    });
  }

  ngOnInit(): void { }

  parseData() {
    this.form.controls.timeCreate.setValue(this.data.timeCreate);
    this.form.controls.displayName.setValue(this.data.displayName);
    this.form.controls.email.setValue(this.data.email);
    this.form.controls.point.setValue(this.data.point);
    this.form.controls.rank.setValue(this.data.rank);
    this.form.controls._id.setValue(this.data._id);
  }

  editUser() {
    let _id = this.form.controls._id.value;
    let payload = {
      _id,
      displayName: this.form.controls.displayName.value,
      email: this.form.controls.email.value,
      point: this.form.controls.point.value,
      rank: this.form.controls.rank.value,
      timeCreate: this.form.controls.timeCreate.value,
      photoURL: this.data.photoURL,
    }
    this.userService.editUser(_id, payload).subscribe({
      next: x => console.log(x),
    });
  }

  loadFriend(data: UserModel) {
    if(data.friend) {
      from(data.friend).pipe(map(x => this.userService.getUserByID(x._id)), concatAll()).subscribe((x: UserModel) => {
        const friend: friend = {
          displayName: x.displayName,
          _id: x._id,
          photoUrl: x.photoURL
        };
        this.friendList.push(friend);
      });
    }
  }

  openTestExamHistoryDetails(dataF) {
    this.dialog.open(TextExamsViewComponent, {
      data: {
        dataF
      }
    });
  }
}
