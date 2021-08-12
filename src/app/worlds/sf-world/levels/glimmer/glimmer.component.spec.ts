import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlimmerComponent } from './glimmer.component';

describe('GlimmerComponent', () => {
  let component: GlimmerComponent;
  let fixture: ComponentFixture<GlimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
