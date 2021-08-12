import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalGlacierComponent } from './crystal-glacier.component';

describe('CrystalGlacierComponent', () => {
  let component: CrystalGlacierComponent;
  let fixture: ComponentFixture<CrystalGlacierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrystalGlacierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalGlacierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
