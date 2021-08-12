import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiptoArenaComponent } from './ripto-arena.component';

describe('RiptoArenaComponent', () => {
  let component: RiptoArenaComponent;
  let fixture: ComponentFixture<RiptoArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiptoArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiptoArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
