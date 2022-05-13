import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeLikeuComponent } from './challenge-likeu.component';

describe('ChallengeLikeuComponent', () => {
  let component: ChallengeLikeuComponent;
  let fixture: ComponentFixture<ChallengeLikeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeLikeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeLikeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
