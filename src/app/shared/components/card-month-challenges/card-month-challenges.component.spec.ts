import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonthChallengesComponent } from './card-month-challenges.component';

describe('CardMonthChallengesComponent', () => {
  let component: CardMonthChallengesComponent;
  let fixture: ComponentFixture<CardMonthChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMonthChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMonthChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
