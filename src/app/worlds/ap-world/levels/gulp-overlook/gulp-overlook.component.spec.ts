import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulpOverlookComponent } from './gulp-overlook.component';

describe('GulpOverlookComponent', () => {
  let component: GulpOverlookComponent;
  let fixture: ComponentFixture<GulpOverlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GulpOverlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GulpOverlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
