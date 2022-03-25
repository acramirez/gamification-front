import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthChallengesComponent } from './month-challenges.component';

describe('MonthChallengesComponent', () => {
  let component: MonthChallengesComponent;
  let fixture: ComponentFixture<MonthChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
