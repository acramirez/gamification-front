import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChallengeLikeuComponent } from './modal-challenge-likeu.component';

describe('ModalChallengeLikeuComponent', () => {
  let component: ModalChallengeLikeuComponent;
  let fixture: ComponentFixture<ModalChallengeLikeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChallengeLikeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChallengeLikeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
