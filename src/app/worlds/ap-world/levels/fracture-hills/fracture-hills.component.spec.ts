import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractureHillsComponent } from './fracture-hills.component';

describe('FractureHillsComponent', () => {
  let component: FractureHillsComponent;
  let fixture: ComponentFixture<FractureHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractureHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractureHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
