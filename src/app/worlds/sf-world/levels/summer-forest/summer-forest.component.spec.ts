import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerForestComponent } from './summer-forest.component';

describe('SummerForestComponent', () => {
  let component: SummerForestComponent;
  let fixture: ComponentFixture<SummerForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerForestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
