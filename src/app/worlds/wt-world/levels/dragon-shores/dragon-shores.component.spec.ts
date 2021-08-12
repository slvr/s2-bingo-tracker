import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonShoresComponent } from './dragon-shores.component';

describe('DragonShoresComponent', () => {
  let component: DragonShoresComponent;
  let fixture: ComponentFixture<DragonShoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonShoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonShoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
