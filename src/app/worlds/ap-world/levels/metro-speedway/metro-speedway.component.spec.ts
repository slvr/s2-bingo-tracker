import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroSpeedwayComponent } from './metro-speedway.component';

describe('MetroSpeedwayComponent', () => {
  let component: MetroSpeedwayComponent;
  let fixture: ComponentFixture<MetroSpeedwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetroSpeedwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroSpeedwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
