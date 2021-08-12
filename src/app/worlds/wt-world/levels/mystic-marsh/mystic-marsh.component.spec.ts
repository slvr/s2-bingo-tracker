import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticMarshComponent } from './mystic-marsh.component';

describe('MysticMarshComponent', () => {
  let component: MysticMarshComponent;
  let fixture: ComponentFixture<MysticMarshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysticMarshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticMarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
