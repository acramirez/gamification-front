import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneralAdvanceComponent } from './card-general-advance.component';

describe('CardGeneralAdvanceComponent', () => {
  let component: CardGeneralAdvanceComponent;
  let fixture: ComponentFixture<CardGeneralAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGeneralAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGeneralAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
