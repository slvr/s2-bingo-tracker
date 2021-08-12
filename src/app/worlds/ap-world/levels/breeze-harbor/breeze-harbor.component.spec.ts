import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezeHarborComponent } from './breeze-harbor.component';

describe('BreezeHarborComponent', () => {
  let component: BreezeHarborComponent;
  let fixture: ComponentFixture<BreezeHarborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreezeHarborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreezeHarborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
