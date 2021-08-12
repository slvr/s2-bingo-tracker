import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-crush-dungeon',
  templateUrl: './crush-dungeon.component.html',
  styleUrls: ['./crush-dungeon.component.scss']
})
export class CrushDungeonComponent extends BaseLevel implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Crush's Dungeon";
    this.maxOrbs = 0;
    this.skillPoints = [false];
  }

}
