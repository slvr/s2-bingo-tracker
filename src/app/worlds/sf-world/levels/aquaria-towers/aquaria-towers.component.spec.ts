import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariaTowersComponent } from './aquaria-towers.component';

describe('AquariaTowersComponent', () => {
  let component: AquariaTowersComponent;
  let fixture: ComponentFixture<AquariaTowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariaTowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariaTowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
