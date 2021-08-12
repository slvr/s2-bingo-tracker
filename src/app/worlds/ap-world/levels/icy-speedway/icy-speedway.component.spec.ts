import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcySpeedwayComponent } from './icy-speedway.component';

describe('IcySpeedwayComponent', () => {
  let component: IcySpeedwayComponent;
  let fixture: ComponentFixture<IcySpeedwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcySpeedwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcySpeedwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
