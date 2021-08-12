import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-icy-speedway',
  templateUrl: './icy-speedway.component.html',
  styleUrls: ['./icy-speedway.component.scss']
})
export class IcySpeedwayComponent extends BaseLevel implements OnInit {

parasailThroughRings: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Icy Speedway";
    this.maxOrbs = 1;

    this.skillPoints = [false];
  }

  completeParasailThroughRings(event: Event) {
    event.preventDefault();
    this.getOrb(this.parasailThroughRings, "parasailThroughRings")
    this.parasailThroughRings = !this.parasailThroughRings;
  }

}
