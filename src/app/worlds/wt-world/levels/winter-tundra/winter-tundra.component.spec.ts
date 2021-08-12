import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTundraComponent } from './winter-tundra.component';

describe('WinterTundraComponent', () => {
  let component: WinterTundraComponent;
  let fixture: ComponentFixture<WinterTundraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterTundraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterTundraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
