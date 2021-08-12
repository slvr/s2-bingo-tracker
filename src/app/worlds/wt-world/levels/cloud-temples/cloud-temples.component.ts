import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-cloud-temples',
  templateUrl: './cloud-temples.component.html',
  styleUrls: ['./cloud-temples.component.scss']
})
export class CloudTemplesComponent extends BaseLevel implements OnInit {

  breakDownDoors: boolean = false;
  agentZerosSecretHideout: boolean = false;
  ringTowerBells: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Cloud Temples";
    this.maxOrbs = 3;
    this.numEnemies = 23;

    this.powerup = new Powerup(PowerupType.Superfreeze, 21);    
    this.maxPinkGems = 1;
    this.maxStrongChests = 1;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 1;
    this.specialEvents = [];
    this.maxButterflyJars = 1;

  }

  completeBreakDownDoors(event: Event) {
    event.preventDefault();
    this.getOrb(this.breakDownDoors, "breakDownDoors")
    this.breakDownDoors = !this.breakDownDoors;
  }

  completeAgentZerosSecretHideout(event: Event) {
    event.preventDefault();
    this.getOrb(this.agentZerosSecretHideout, "agentZerosSecretHideout")
    this.agentZerosSecretHideout = !this.agentZerosSecretHideout;
  }

  completeRingTowerBells(event: Event) {
    event.preventDefault();
    this.getOrb(this.ringTowerBells, "ringTowerBells")
    this.ringTowerBells = !this.ringTowerBells;
  }

}
