import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-zephyr',
  templateUrl: './zephyr.component.html',
  styleUrls: ['./zephyr.component.scss']
})
export class ZephyrComponent extends BaseLevel implements OnInit {

  cowlekCorral1: boolean = false;
  cowlekCorral2: boolean = false;
  sowingSeeds1: boolean = false;
  sowingSeeds2: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Zephyr";
    this.maxOrbs = 4;
    this.numEnemies = 30;

    this.powerup = new Powerup(PowerupType.Superflame, 2);
    this.maxPinkGems = 2;
    this.maxStrongChests = 3;
    this.maxButterflyJars = 1;
  }

  completeCowlekCorral1(event: Event) {
    event.preventDefault();
    this.getOrb(this.cowlekCorral1, "cowlekCorral1")
    this.cowlekCorral1 = !this.cowlekCorral1;
  }

  completeCowlekCorral2(event: Event) {
    event.preventDefault();
    this.getOrb(this.cowlekCorral2, "cowlekCorral2")
    this.cowlekCorral2 = !this.cowlekCorral2;
  }

  completeSowingSeeds1(event: Event) {
    event.preventDefault();
    this.getOrb(this.sowingSeeds1, "sowingSeeds1")
    this.sowingSeeds1 = !this.sowingSeeds1;
  }

  completeSowingSeeds2(event: Event) {
    event.preventDefault();
    this.getOrb(this.sowingSeeds2, "sowingSeeds2")
    this.sowingSeeds2 = !this.sowingSeeds2;
  }

}
