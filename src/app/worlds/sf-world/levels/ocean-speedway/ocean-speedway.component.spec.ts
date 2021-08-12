import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanSpeedwayComponent } from './ocean-speedway.component';

describe('OceanSpeedwayComponent', () => {
  let component: OceanSpeedwayComponent;
  let fixture: ComponentFixture<OceanSpeedwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanSpeedwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanSpeedwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
