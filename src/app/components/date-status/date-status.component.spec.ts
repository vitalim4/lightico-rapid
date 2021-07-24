import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStatusComponent } from './date-status.component';

describe('DateStatusComponent', () => {
  let component: DateStatusComponent;
  let fixture: ComponentFixture<DateStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
