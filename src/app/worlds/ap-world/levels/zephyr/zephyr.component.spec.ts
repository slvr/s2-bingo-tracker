import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZephyrComponent } from './zephyr.component';

describe('ZephyrComponent', () => {
  let component: ZephyrComponent;
  let fixture: ComponentFixture<ZephyrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZephyrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZephyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
