import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApWorldComponent } from './ap-world.component';

describe('ApWorldComponent', () => {
  let component: ApWorldComponent;
  let fixture: ComponentFixture<ApWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
