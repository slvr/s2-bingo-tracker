import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-fracture-hills',
  templateUrl: './fracture-hills.component.html',
  styleUrls: ['./fracture-hills.component.scss']
})
export class FractureHillsComponent extends BaseLevel implements OnInit {

  freeTheFaun: boolean = false;
  alchemistEscort: boolean = false;
  earthshaperBash: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Fracture Hills";
    this.maxOrbs = 3;
    this.numEnemies = 29;

    this.powerup = new Powerup(PowerupType.Supercharge, 14);    
    this.maxPinkGems = 1;
    this.maxStrongChests = 1;
    this.skillPoints = [false];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;

  }

  completeFreeTheFaun(event: Event) {
    event.preventDefault();
    this.getOrb(this.freeTheFaun, "freeTheFaun")
    this.freeTheFaun = !this.freeTheFaun;
  }

  completeAlchemistEscort(event: Event) {
    event.preventDefault();
    this.getOrb(this.alchemistEscort, "alchemistEscort")
    this.alchemistEscort = !this.alchemistEscort;
  }

  completeEarthshaperBash(event: Event) {
    event.preventDefault();
    this.getOrb(this.earthshaperBash, "earthshaperBash")
    this.earthshaperBash = !this.earthshaperBash;
  }

}
