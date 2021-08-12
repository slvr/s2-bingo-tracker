import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkelosBadlandsComponent } from './skelos-badlands.component';

describe('SkelosBadlandsComponent', () => {
  let component: SkelosBadlandsComponent;
  let fixture: ComponentFixture<SkelosBadlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkelosBadlandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkelosBadlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
