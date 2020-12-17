import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextExamsViewComponent } from './text-exams-view.component';

describe('TextExamsViewComponent', () => {
  let component: TextExamsViewComponent;
  let fixture: ComponentFixture<TextExamsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextExamsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextExamsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
