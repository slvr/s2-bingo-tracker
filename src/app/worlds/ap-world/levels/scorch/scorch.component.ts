import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-scorch',
  templateUrl: './scorch.component.html',
  styleUrls: ['./scorch.component.scss']
})
export class ScorchComponent extends BaseLevel implements OnInit {

  barrelOfMonkeys: boolean = false;
  captureTheFlags: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Scorch";
    this.maxOrbs = 2;
    this.numEnemies = 28;

    this.powerup = new Powerup(PowerupType.Superflame, 20);    
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [false];
    this.maxFireworksBottles = 9;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;
  }

  completeBarrelOfMonkeys(event: Event) {
    event.preventDefault();
    this.getOrb(this.barrelOfMonkeys, "barrelOfMonkeys")
    this.barrelOfMonkeys = !this.barrelOfMonkeys;
  }

  completeCaptureTheFlags(event: Event) {
    event.preventDefault();
    this.getOrb(this.captureTheFlags, "captureTheFlags")
    this.captureTheFlags = !this.captureTheFlags;
  }

}
