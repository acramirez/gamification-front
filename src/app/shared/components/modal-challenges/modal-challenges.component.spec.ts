import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChallengesComponent } from './modal-challenges.component';

describe('ModalChallengesComponent', () => {
  let component: ModalChallengesComponent;
  let fixture: ComponentFixture<ModalChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
