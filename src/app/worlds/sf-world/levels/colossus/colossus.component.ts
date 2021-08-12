import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';


@Component({
  selector: 'app-colossus',
  templateUrl: './colossus.component.html',
  styleUrls: ['./colossus.component.scss']
})
export class ColossusComponent extends BaseLevel implements OnInit {

  hockeyVsGoalie: boolean = false;
  hockeyOneOnOne: boolean = false;
  evilSpiritSearch: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Colossus";
    this.maxOrbs = 3;
    this.numEnemies = 13;

    this.powerup = new Powerup(PowerupType.Superbounce, 11);
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [false];
    this.maxFireworksBottles = 0;
    this.specialEvents = [false];
    this.maxButterflyJars = 1;
    this.maxZoes = 3;
  }

  completeHockeyVsGoalie(event: Event) {
    event.preventDefault();
    this.getOrb(this.hockeyVsGoalie, "hockeyVsGoalie")
    this.hockeyVsGoalie = !this.hockeyVsGoalie;
  }

  completeHockeyOneOnOne(event: Event) {
    event.preventDefault();
    this.getOrb(this.hockeyOneOnOne, "hockeyOneOnOne")
    this.hockeyOneOnOne = !this.hockeyOneOnOne;
  }

  completeEvilSpiritSearch(event: Event) {
    event.preventDefault();
    this.getOrb(this.evilSpiritSearch, "evilSpiritSearch")
    this.evilSpiritSearch = !this.evilSpiritSearch;
  }

}
