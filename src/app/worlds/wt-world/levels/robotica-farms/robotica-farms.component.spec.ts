import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticaFarmsComponent } from './robotica-farms.component';

describe('RoboticaFarmsComponent', () => {
  let component: RoboticaFarmsComponent;
  let fixture: ComponentFixture<RoboticaFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticaFarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticaFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
