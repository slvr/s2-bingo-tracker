import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtWorldComponent } from './wt-world.component';

describe('WtWorldComponent', () => {
  let component: WtWorldComponent;
  let fixture: ComponentFixture<WtWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
