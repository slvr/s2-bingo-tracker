import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-metropolis',
  templateUrl: './metropolis.component.html',
  styleUrls: ['./metropolis.component.scss']
})
export class MetropolisComponent extends BaseLevel implements OnInit {

  conquerInvadingCows: boolean = false;
  shootDownSheepSaucers1: boolean = false;
  shootDownSheepSaucers2: boolean = false;
  oxBombing: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Metropolis";
    this.maxOrbs = 4;
    this.numEnemies = 22;

    this.powerup = new Powerup(PowerupType.Dual, 1);
    this.maxPinkGems = 0;
    this.maxStrongChests = 2;
    this.skillPoints = [];
    this.maxFireworksBottles = 4;
    this.maxHeadbashChest = 2;
    this.specialEvents = [];
    this.maxButterflyJars = 0;
  }

  completeConquerInvadingCows(event: Event) {
    event.preventDefault();
    this.getOrb(this.conquerInvadingCows, "conquerInvadingCows")
    this.conquerInvadingCows = !this.conquerInvadingCows;
  }

  completeShootDownSheepSaucers1(event: Event) {
    event.preventDefault();
    this.getOrb(this.shootDownSheepSaucers1, "shootDownSheepSaucers1")
    this.shootDownSheepSaucers1 = !this.shootDownSheepSaucers1;
  }

  completeShootDownSheepSaucers2(event: Event) {
    event.preventDefault();
    this.getOrb(this.shootDownSheepSaucers2, "shootDownSheepSaucers2")
    this.shootDownSheepSaucers2 = !this.shootDownSheepSaucers2;
  }

  completeOxBombing(event: Event) {
    event.preventDefault();
    this.getOrb(this.oxBombing, "oxBombing")
    this.oxBombing = !this.oxBombing;
  }

}
