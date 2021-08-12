import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-winter-tundra',
  templateUrl: './winter-tundra.component.html',
  styleUrls: ['./winter-tundra.component.scss']
})
export class WinterTundraComponent extends BaseLevel implements OnInit {

  topOfTheWaterfall: boolean = false;
  onTheTallWall: boolean = false;
  smashTheRock: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Winter Tundra"
    this.maxOrbs = 3;
    this.moneyBags = [false, false];

    this.powerup = null;
    this.maxPinkGems = 0;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.specialEvents = [];
    this.maxHeadbashChest = 1;
    this.maxButterflyJars = 0;
  }

  completeTopOfTheWaterfall(event: Event) {
    event.preventDefault();
    this.getOrb(this.topOfTheWaterfall, "topOfTheWaterfall")
    this.topOfTheWaterfall = !this.topOfTheWaterfall;
  }

  completeOnTheTallWall(event: Event) {
    event.preventDefault();
    this.getOrb(this.onTheTallWall, "onTheTallWall")
    this.onTheTallWall = !this.onTheTallWall;
  }

  completeSmashTheRock(event: Event) {
    event.preventDefault();
    this.getOrb(this.smashTheRock, "smashTheRock")
    this.smashTheRock = !this.smashTheRock;
  }

}
