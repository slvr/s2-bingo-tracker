import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricosComponent } from './hurricos.component';

describe('HurricosComponent', () => {
  let component: HurricosComponent;
  let fixture: ComponentFixture<HurricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
