import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-magma-cone',
  templateUrl: './magma-cone.component.html',
  styleUrls: ['./magma-cone.component.scss']
})
export class MagmaConeComponent extends BaseLevel implements OnInit {

  partyCrashers: boolean = false;
  crystalGeysers1: boolean = false;
  crystalGeysers2: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Magma Cone";
    this.maxOrbs = 3;
    this.moneyBags = [false];
    this.numEnemies = 19;

    this.powerup = new Powerup(PowerupType.Superfly, 2);    
    this.maxPinkGems = 0;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 4;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 4;

  }

  completePartyCrashers(event: Event) {
    event.preventDefault();
    this.getOrb(this.partyCrashers, "partyCrashers")
    this.partyCrashers = !this.partyCrashers;
  }

  completeCrystalGeysers1(event: Event) {
    event.preventDefault();
    this.getOrb(this.crystalGeysers1, "crystalGeysers1")
    this.crystalGeysers1 = !this.crystalGeysers1;
  }

  completecrystalGeysers2(event: Event) {
    event.preventDefault();
    this.getOrb(this.crystalGeysers2, "crystalGeysers2")
    this.crystalGeysers2 = !this.crystalGeysers2;
  }

}
