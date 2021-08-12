import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanyonSpeedwayComponent } from './canyon-speedway.component';

describe('CanyonSpeedwayComponent', () => {
  let component: CanyonSpeedwayComponent;
  let fixture: ComponentFixture<CanyonSpeedwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanyonSpeedwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanyonSpeedwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
