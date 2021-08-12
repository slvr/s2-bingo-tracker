import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagmaConeComponent } from './magma-cone.component';

describe('MagmaConeComponent', () => {
  let component: MagmaConeComponent;
  let fixture: ComponentFixture<MagmaConeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagmaConeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagmaConeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
