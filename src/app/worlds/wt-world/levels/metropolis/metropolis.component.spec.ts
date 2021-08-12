import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolisComponent } from './metropolis.component';

describe('MetropolisComponent', () => {
  let component: MetropolisComponent;
  let fixture: ComponentFixture<MetropolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
