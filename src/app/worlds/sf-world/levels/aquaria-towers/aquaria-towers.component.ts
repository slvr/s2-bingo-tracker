import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-aquaria-towers',
  templateUrl: './aquaria-towers.component.html',
  styleUrls: ['./aquaria-towers.component.scss']
})
export class AquariaTowersComponent extends BaseLevel implements OnInit {

  seahorseRescue: boolean = false;
  mantaRide1: boolean = false;
  mantaRide2: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Aquaria Towers";
    this.maxOrbs = 3;
    this.moneyBags = [false];
    this.numEnemies = 29;

    this.powerup = new Powerup(PowerupType.Superflame, 14);    
    this.maxPinkGems = 1;
    this.maxStrongChests = 2;
    this.skillPoints = [false];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;

  }

  completeSeahorseRescue(event: Event) {
    event.preventDefault();
    this.getOrb(this.seahorseRescue, "seahorseRescue")
    this.seahorseRescue = !this.seahorseRescue;
  }

  completeMantaRide1(event: Event) {
    event.preventDefault();
    this.getOrb(this.mantaRide1, "mantaRide1")
    this.mantaRide1 = !this.mantaRide1;
  }

  completeMantaRide2(event: Event) {
    event.preventDefault();
    this.getOrb(this.mantaRide2, "mantaRide2")
    this.mantaRide2 = !this.mantaRide2;
  }

}
