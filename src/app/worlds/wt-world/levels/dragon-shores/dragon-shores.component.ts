import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-dragon-shores',
  templateUrl: './dragon-shores.component.html',
  styleUrls: ['./dragon-shores.component.scss']
})
export class DragonShoresComponent extends BaseLevel implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Dragon Shores";
    this.maxOrbs = 0;
  }

}
