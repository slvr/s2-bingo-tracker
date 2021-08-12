import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-ocean-speedway',
  templateUrl: './ocean-speedway.component.html',
  styleUrls: ['./ocean-speedway.component.scss']
})
export class OceanSpeedwayComponent extends BaseLevel implements OnInit {

followHunter: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Ocean Speedway";
    this.maxOrbs = 1;

    this.skillPoints = [false];
  }

  completeFollowHunter(event: Event) {
    event.preventDefault();
    this.getOrb(this.followHunter, "followHunter")
    this.followHunter = !this.followHunter;
  }

}
