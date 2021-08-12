import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutumnPlainsComponent } from './autumn-plains.component';

describe('AutumnPlainsComponent', () => {
  let component: AutumnPlainsComponent;
  let fixture: ComponentFixture<AutumnPlainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutumnPlainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutumnPlainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
