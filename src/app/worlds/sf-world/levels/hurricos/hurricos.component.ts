import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-hurricos',
  templateUrl: './hurricos.component.html',
  styleUrls: ['./hurricos.component.scss']
})
export class HurricosComponent extends BaseLevel implements OnInit {

  stoneThiefChase: boolean = false;
  factoryGlide1: boolean = false;
  factoryGlide2: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Hurricos";
    this.maxOrbs = 3;
    this.numEnemies = 22;

    this.powerup = new Powerup(PowerupType.Supercharge, 18);    
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [false];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;

  }

  completeStoneThiefChase(event: Event) {
    event.preventDefault();
    this.getOrb(this.stoneThiefChase, "stoneThiefChase")
    this.stoneThiefChase = !this.stoneThiefChase;
  }

  completeFactoryGlide1(event: Event) {
    event.preventDefault();
    this.getOrb(this.factoryGlide1, "factoryGlide1")
    this.factoryGlide1 = !this.factoryGlide1;
  }

  completeFactoryGlide2(event: Event) {
    event.preventDefault();
    this.getOrb(this.factoryGlide2, "factoryGlide2")
    this.factoryGlide2 = !this.factoryGlide2;
  }

}
