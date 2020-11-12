import { AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CloudService } from '../../Services/cloud.service';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { QuestionViewComponent } from './question-view/question-view.component';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit, AfterViewInit {
  data: MatTableDataSource<any> = null;
  displayedColumns: string[] = ['ID', 'Title', 'Action'];
  dataLength: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private cloud: CloudService, private dialog: MatDialog, private changeDetection: ChangeDetectorRef) {
    this.loadQuestion();
  }

  ngAfterViewInit(): void {
    console.log(this.paginator);

  }

  ngOnInit(): void {

  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  private loadQuestion(): void {
    this.cloud.getAllQuestion().subscribe((x: any) => {
      this.data = new MatTableDataSource(x.data);
      this.dataLength = x.data.length;
      this.changeDetection.detectChanges();

      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
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
