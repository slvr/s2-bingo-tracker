import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-autumn-plains',
  templateUrl: './autumn-plains.component.html',
  styleUrls: ['./autumn-plains.component.scss']
})
export class AutumnPlainsComponent extends BaseLevel implements OnInit {

  theEndOfTheWall: boolean = false;
  longGlide: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Autumn Plains"
    this.maxOrbs = 2;
    this.moneyBags = [false, false, false, false];

    this.powerup = null;    
    this.maxPinkGems = 3;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;

  }

  completeTheEndOfTheWall(event: Event) {
    event.preventDefault();
    this.getOrb(this.theEndOfTheWall, "theEndOfTheWall")
    this.theEndOfTheWall = !this.theEndOfTheWall;
  }

  completeLongGlide(event: Event) {
    event.preventDefault();
    this.getOrb(this.longGlide, "longGlide")
    this.longGlide = !this.longGlide;
  }

}
