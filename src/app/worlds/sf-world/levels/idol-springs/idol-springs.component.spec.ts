import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolSpringsComponent } from './idol-springs.component';

describe('IdolSpringsComponent', () => {
  let component: IdolSpringsComponent;
  let fixture: ComponentFixture<IdolSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
