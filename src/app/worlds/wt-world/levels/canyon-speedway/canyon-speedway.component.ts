import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-canyon-speedway',
  templateUrl: './canyon-speedway.component.html',
  styleUrls: ['./canyon-speedway.component.scss']
})
export class CanyonSpeedwayComponent extends BaseLevel implements OnInit {

  shootDownBalloons: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Canyon Speedway";
    this.maxOrbs = 1;

    this.skillPoints = [false];
  }

  completeShootDownBalloons(event: Event) {
    event.preventDefault();
    this.getOrb(this.shootDownBalloons, "shootDownBalloons")
    this.shootDownBalloons = !this.shootDownBalloons;
  }

}
