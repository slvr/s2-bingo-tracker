import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfWorldComponent } from './sf-world.component';

describe('SfWorldComponent', () => {
  let component: SfWorldComponent;
  let fixture: ComponentFixture<SfWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
