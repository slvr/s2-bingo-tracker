import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-metro-speedway',
  templateUrl: './metro-speedway.component.html',
  styleUrls: ['./metro-speedway.component.scss']
})
export class MetroSpeedwayComponent extends BaseLevel implements OnInit {

grabTheLoot: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Metro Speedway";
    this.maxOrbs = 1;

    this.skillPoints = [false];
  }

  completeGrabTheLoot(event: Event) {
    event.preventDefault();
    this.getOrb(this.grabTheLoot, "grabTheLoot")
    this.grabTheLoot = !this.grabTheLoot;
  }

}
