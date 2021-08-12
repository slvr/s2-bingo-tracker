import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-idol-springs',
  templateUrl: './idol-springs.component.html',
  styleUrls: ['./idol-springs.component.scss']
})
export class IdolSpringsComponent extends BaseLevel implements OnInit {

  foremanBudsPuzzle: boolean = false;
  hulaGirlRescue: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Idol Springs";
    this.maxOrbs = 2;
    this.numEnemies = 11;

    this.powerup = new Powerup(PowerupType.Supercharge, 8);
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [false];
    this.maxFireworksBottles = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 1;
    this.maxZoes = 2;
  }

  completeForemanBudsPuzzle(event: Event) {
    event.preventDefault();
    this.getOrb(this.foremanBudsPuzzle, "foremanBudsPuzzle")
    this.foremanBudsPuzzle = !this.foremanBudsPuzzle;
  }

  completeHulaGirlRescue(event: Event) {
    event.preventDefault();
    this.getOrb(this.hulaGirlRescue, "hulaGirlRescue")
    this.hulaGirlRescue = !this.hulaGirlRescue;
  }

}
