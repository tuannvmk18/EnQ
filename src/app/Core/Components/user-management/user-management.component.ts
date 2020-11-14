import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  users: MatTableDataSource<UserModel> = new MatTableDataSource([]);
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {
    this.loadData();
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  loadData(): void {
    this.userService.getAllUser().subscribe((val: any) => {
      this.users = new MatTableDataSource(val.data);
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


