import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-crystal-glacier',
  templateUrl: './crystal-glacier.component.html',
  styleUrls: ['./crystal-glacier.component.scss']
})
export class CrystalGlacierComponent extends BaseLevel implements OnInit {

  dracletCave: boolean = false;
  georgeTheSnowLeopard: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Crystal Glacier";
    this.maxOrbs = 2;
    this.moneyBags = [false];
    this.numEnemies = 38;

    this.powerup = new Powerup(PowerupType.Superfly, 15);    
    this.maxPinkGems = 1;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 4;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;

  }

  completeDracletCave(event: Event) {
    event.preventDefault();
    this.getOrb(this.dracletCave, "dracletCave")
    this.dracletCave = !this.dracletCave;
  }

  completeGeorgeTheSnowLeopard(event: Event) {
    event.preventDefault();
    this.getOrb(this.georgeTheSnowLeopard, "georgeTheSnowLeopard")
    this.georgeTheSnowLeopard = !this.georgeTheSnowLeopard;
  }

}
