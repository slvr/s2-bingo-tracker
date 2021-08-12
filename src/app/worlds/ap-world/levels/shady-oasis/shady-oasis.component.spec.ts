import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadyOasisComponent } from './shady-oasis.component';

describe('ShadyOasisComponent', () => {
  let component: ShadyOasisComponent;
  let fixture: ComponentFixture<ShadyOasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadyOasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadyOasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
