import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorchComponent } from './scorch.component';

describe('ScorchComponent', () => {
  let component: ScorchComponent;
  let fixture: ComponentFixture<ScorchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
