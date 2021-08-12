import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-shady-oasis',
  templateUrl: './shady-oasis.component.html',
  styleUrls: ['./shady-oasis.component.scss']
})
export class ShadyOasisComponent extends BaseLevel implements OnInit {

  catch3Thieves: boolean = false;
  freeHippos: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Shady Oasis";
    this.maxOrbs = 2;
    this.numEnemies = 21;

    this.powerup = new Powerup(PowerupType.Invincibility, 18);    
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [];
    this.maxFireworksBottles = 1;
    this.maxHeadbashChest = 1;
    this.specialEvents = [];
    this.maxButterflyJars = 1;
  }

  completeCatch3Thieves(event: Event) {
    event.preventDefault();
    this.getOrb(this.catch3Thieves, "catch3Thieves")
    this.catch3Thieves = !this.catch3Thieves;
  }

  completeFreeHippos(event: Event) {
    event.preventDefault();
    this.getOrb(this.freeHippos, "freeHippos")
    this.freeHippos = !this.freeHippos;
  }

}
