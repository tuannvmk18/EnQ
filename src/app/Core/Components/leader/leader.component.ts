import { Component, OnInit, ViewChild } from '@angular/core';
import { CloudService } from '../../Services/cloud.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {

  constructor(private cloud: CloudService) {
    this.cloud.getLeaderByDay().subscribe(x => {
      console.log(x);
    });
  }

  ngOnInit(): void {
  }


}



