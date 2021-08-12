import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushDungeonComponent } from './crush-dungeon.component';

describe('CrushDungeonComponent', () => {
  let component: CrushDungeonComponent;
  let fixture: ComponentFixture<CrushDungeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrushDungeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushDungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
