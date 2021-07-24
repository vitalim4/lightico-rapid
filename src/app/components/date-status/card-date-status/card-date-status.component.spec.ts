import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDateStatusComponent } from './card-date-status.component';

describe('CardDateStatusComponent', () => {
  let component: CardDateStatusComponent;
  let fixture: ComponentFixture<CardDateStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDateStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
