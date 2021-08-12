import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudTemplesComponent } from './cloud-temples.component';

describe('CloudTemplesComponent', () => {
  let component: CloudTemplesComponent;
  let fixture: ComponentFixture<CloudTemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudTemplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudTemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
