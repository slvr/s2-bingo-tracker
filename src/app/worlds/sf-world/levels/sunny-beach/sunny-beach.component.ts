import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-sunny-beach',
  templateUrl: './sunny-beach.component.html',
  styleUrls: ['./sunny-beach.component.scss']
})
export class SunnyBeachComponent extends BaseLevel implements OnInit {

  blastingBoxes: boolean = false;
  turtleSoup1: boolean = false;
  turtleSoup2: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Sunny Beach";
    this.maxOrbs = 3;
    this.numEnemies = 17;

    this.powerup = new Powerup(PowerupType.Superflame, 11);
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 0;
  }

  completeBlastingBoxes(event: Event) {
    event.preventDefault();
    this.getOrb(this.blastingBoxes, "blastingBoxes")
    this.blastingBoxes = !this.blastingBoxes;
  }

  completeTurtleSoup1(event: Event) {
    event.preventDefault();
    this.getOrb(this.turtleSoup1, "turtleSoup1")
    this.turtleSoup1 = !this.turtleSoup1;
  }

  completeTurtleSoup2(event: Event) {
    event.preventDefault();
    this.getOrb(this.turtleSoup2, "turtleSoup2")
    this.turtleSoup2 = !this.turtleSoup2;
  }

}
