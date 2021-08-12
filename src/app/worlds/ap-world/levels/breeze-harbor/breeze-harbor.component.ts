import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-breeze-harbor',
  templateUrl: './breeze-harbor.component.html',
  styleUrls: ['./breeze-harbor.component.scss']
})
export class BreezeHarborComponent extends BaseLevel implements OnInit {

  mineBlast: boolean = false;
  gearGrab: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Breeze Harbor";
    this.maxOrbs = 2;
    this.numEnemies = 16;

    this.powerup = new Powerup(PowerupType.Superbounce, 14);    
    this.maxPinkGems = 0;
    this.maxStrongChests = 3;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 2;

  }

  completeMineBlast(event: Event) {
    event.preventDefault();
    this.getOrb(this.mineBlast, "mineBlast")
    this.mineBlast = !this.mineBlast;
  }

  completeGearGrab(event: Event) {
    event.preventDefault();
    this.getOrb(this.gearGrab, "gearGrab")
    this.gearGrab = !this.gearGrab;
  }

}
