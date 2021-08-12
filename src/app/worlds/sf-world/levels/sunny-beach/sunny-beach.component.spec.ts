import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyBeachComponent } from './sunny-beach.component';

describe('SunnyBeachComponent', () => {
  let component: SunnyBeachComponent;
  let fixture: ComponentFixture<SunnyBeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunnyBeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
