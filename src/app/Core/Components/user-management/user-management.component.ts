import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../../Interfaces/userModel';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, AfterViewInit {
  users: MatTableDataSource<UserModel>;
  displayedColumns: string[] = ['id', 'displayName'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private changeDetection: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.userService.getAllUser().subscribe((val: any) => {
      this.users = new MatTableDataSource(val.data);
      console.log(val.data);
      
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    });  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }
}


