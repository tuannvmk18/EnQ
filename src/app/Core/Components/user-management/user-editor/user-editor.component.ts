import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
