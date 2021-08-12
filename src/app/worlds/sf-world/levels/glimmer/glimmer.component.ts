import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import {BaseLevel} from '../../../base-level.component'

@Component({
  selector: 'app-glimmer',
  templateUrl: './glimmer.component.html',
  styleUrls: ['./glimmer.component.scss']
})
export class GlimmerComponent extends BaseLevel implements OnInit {

  lizardHunt: boolean = false;
  gemLampFightOutdoors: boolean = false;
  gemLampFightIndoors: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Glimmer";
    this.maxOrbs = 3;
    this.moneyBags = [false];
    this.numEnemies = 14;

    this.powerup = new Powerup(PowerupType.Superfly, 10);
    this.maxPinkGems = 0;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 0;
    this.maxZoes = 2;
  }

  completeLizardHunt(event: Event) {
    event.preventDefault();
    this.getOrb(this.lizardHunt, "lizardHunt")
    this.lizardHunt = !this.lizardHunt;
  }

  completeOutdoorLamps(event: Event) {
    event.preventDefault();
    this.getOrb(this.gemLampFightOutdoors, "gemLampFightOutdoors")
    this.gemLampFightOutdoors = !this.gemLampFightOutdoors;
  }

  completeIndoorLamps(event: Event) {
    event.preventDefault();
    this.getOrb(this.gemLampFightIndoors, "gemLampFightIndoors")
    this.gemLampFightIndoors = !this.gemLampFightIndoors;
  }

}
