import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll, map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditorComponent implements OnInit {
  ID: string;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.route.paramMap.pipe(map((val) => this.userService.getUserByID(val.get('id'))), concatAll()).subscribe(val => {
      console.log(val);
    });
  }

  ngOnInit(): void {}
}
