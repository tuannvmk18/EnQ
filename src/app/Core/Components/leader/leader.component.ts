import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../Services/cloud.service';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {

  constructor(private cloud: CloudService) {
    this.cloud.getLeaderByDay().subscribe(x => {
      console.log(x);
    })
  }

  ngOnInit(): void {
  }

}
